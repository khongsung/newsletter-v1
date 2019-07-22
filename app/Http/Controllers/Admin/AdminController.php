<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\RequestPublicTemplate;
use App\Category;
use Auth;
use App\Template;
use App\User;
use App\Tag;
use DB;
use App\TagTemplate;

class AdminController extends Controller
{
    public $login_as;
	public function __construct()
    {
        
        $this->middleware('auth', ['except' => ['logout', 'viewTemplate']]);
        $count_request = RequestPublicTemplate::where('is_accepted',0)->count();
        \View::share(['count_request' => $count_request,'login_as' => $this->login_as]);
    }
    //home
    public function index()
  	{   
        $template_public = Template::where('type',1)->where('is_public',2)->count();
        $all_template = Template::where('type',0)->count();
        $my_template = Template::where('user_id',Auth()->user()->id)->where('type',0)->get();
        return view('admin.index',compact('template_public','all_template','my_template')); 
  	}


    //get category cua admin
  	public function getCategory(){
    	if(!Auth()->check()){
    		return "You must login before!!";
    	}else{ 
    		return Category::where('user_id',Auth()->user()->id)->get();
    	}
    }
    //them moi category
    public function addCategory(Request $req){
    	$category = new Category();
    	$category->name = $req->name;
    	$category->description = $req->description ? $req->description : '';
    	$category->user_id = Auth()->user()->id;
    	$category->save();
    	return back();
    }
    //get Tag cua admin
    public function getTag(){
        if(!Auth()->check()){
            return "You must login before!!";
        }else{ 
            return Tag::where('user_id',Auth()->user()->id)->get();
        }
    }
    //them moi Tag
    public function addTag(Request $req){
        $tag = new Tag();
        $tag->name = $req->name;
        $tag->description = $req->description ? $req->description : '';
        $tag->user_id = Auth()->user()->id;
        $tag->save();
        return back();
    }
    //lay ban ghi can sua trong template public admin
    public function getEdit($id){
        if(substr(url()->previous(), strlen(url()->previous())-strlen('all-template')) == 'all-template'){
            $template = Template::where('id',$id)->first();
            $action = 'add-new';
        }else {
            $template = Template::where('id',$id)->first();
            $action = 'edit';
        }

    	$template_public = Template::where('type',1)->where('is_public',2)->get();
		$template_user = Template::where('type',0)->where('user_id',Auth()->user()->id)->get();
        $category = Category::where('user_id',Auth()->user()->id)->get();
        $tag = Tag::where('user_id',Auth()->user()->id)->get();
		return view('frontend.admin-edit',compact('template_public','template_user','template','action','category','tag'));
    }

    //xuat link de xem
    public function viewTemplate($id){
        $template = Template::where('id',$id)->first();
        return view('admin.export-link',compact('template'));
    }


    //Luu lai template khi sửa đa public 
    public function postEditTemplate(Request $req){   
    	$template = Template::where('id',$req->id)->first();        
        $template->name = $req->name;
        $content = (array) json_decode($req->content);
        $data = json_encode($content);
    	$template->content = $data;
    	$template->category_id = $req->category;
        $template->save();
        if(count($req->tag) > 0){
            TagTemplate::where('template_id',$req->id)->delete();
            foreach ($req->tag as $key => $value) {
                $tag_template = new TagTemplate();
                $tag_template->tag_id = $value;
                $tag_template->template_id = $template->id;
                $tag_template->save();
            }
        }
    	return redirect()->route('admin')->with(["clear"=>"Clear local storage"]);
    }

    public function loginAs($id){
        $user = User::where('id',$id)->first();
        Auth::loginUsingId($id,true);
        return redirect()->route('admin');
    }

    public function getSearchAjax(Request $request)
    {
        $output_personal = '';
        $output_public = '';
        if($request->get('search_key'))
        {
            $key = $request->get('search_key');
            $tag = Tag::where('name','LIKE',"%$key%")->first();
            if ($tag) {
                $template_personal = $tag->TemplatePersonal;
                $template_public = $tag->TemplatePublicForAdmin;
                if (count($template_personal) > 0) {
                    foreach ($template_personal as $key => $value) {
                        $output_personal .= '<div class="item-user" value="'.$value->id.' " ><span>'.$value->name.'</span><label class="btn btn-basic drag">drag</label></div>';
                    }
                }else{
                    $output_personal .= '<div class="item-user" ><span>empty</span></div>';
                }
                if (count($template_public) > 0) {
                    foreach ($template_public as $key => $value) {
                        $output_public .= '<div class="item-user" value="'.$value->id.' " ><span>'.$value->name.'</span><label class="btn btn-basic drag">drag</label></div>';
                    }
                }else{
                    $output_public .= '<div class="item-user" ><span>empty</span></div>';
                }
            }else{
                $output_personal = '<span style="color:red;">Not Found</span>';
                $output_public = '<span style="color:red;">Not Found</span>';
            }
            
       }else {
            $template_personal = Template::where('user_id',Auth()->user()->id)->where('type',0)->get();
            $template_public = Template::where('type',1)->get();

            foreach ($template_personal as $key => $value) {
                $output_personal .= '<div class="item-user" value="'.$value->id.' " ><span>'.$value->name.'</span><label class="btn btn-basic drag">drag</label></div>';
            }
            foreach ($template_public as $key => $value) {
                $output_public .= '<div class="item-user" value="'.$value->id.' " ><span>'.$value->name.'</span><label class="btn btn-basic drag">drag</label></div>';
            }
       }
       return [$output_personal,$output_public];
    }
    
}
