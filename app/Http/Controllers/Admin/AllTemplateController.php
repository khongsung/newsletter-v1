<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\RequestPublicTemplate;
use App\Category;
use App\Template;
use App\User;
use App\Tag;
use App\TagTemplate;
class AllTemplateController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['logout']]);
        $count_request = RequestPublicTemplate::where('is_accepted',0)->count();
        \View::share('count_request', $count_request);
    }

    public function index(){
        if (Auth()->user()->role != 1) {
            return redirect()->route('admin');
        }
    	$user = User::paginate(10);
  		return view('admin.all-template',compact('user'));
    }

    //admin public sau khi sua cua user
    public function postAddTemplate(Request $req){
        $re = RequestPublicTemplate::where('template_id', $req->id)->where('is_accepted',0)->first();
        if ($re != null) {
            $re->is_accepted = 1;
            $re->save();
        }
        $template_personal = Template::where('id',$req->id)->first();
        $template_personal->is_public = 2;
        $template_personal->save();
        $template = new Template();
        $template->user_id = Auth()->user()->id;      
        $template->name = $req->name;
        $content = (array) json_decode($req->content);
        $data = json_encode($content);
        $template->content = $data;
        $template->category_id = $req->category;
        $template->type = 1;
        $template->is_public = 2;
        $template->save();
        if(count($req->tag) > 0){
            //TagTemplate::where('template_id',$req->id)->delete();
            foreach ($req->tag as $key => $value) {
                $tag_template = new TagTemplate();
                $tag_template->tag_id = $value;
                $tag_template->template_id = $template->id;
                $tag_template->save();
            }
        }
        return redirect()->route('admin.template-public')->with(["clear"=>"Clear local storage"]);;
    }
}

