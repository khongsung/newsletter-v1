<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\RequestPublicTemplate;
use App\Template;
use App\TagTemplate;

class RequestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['logout']]);
        $count_request = RequestPublicTemplate::where('is_accepted',0)->count();
        \View::share('count_request', $count_request);
    }

    public function index(){
    	$request_public_template = RequestPublicTemplate::orderby('id','desc')->get();
        return view('admin.request',compact('request_public_template'));
    }

    //add new request public template
    public function requestPublicTemplate($id)
    {
        $template = Template::where('id',$id)->first();
        $template->is_public = 1; //pending
        if ($template->save()) {
            $r = new RequestPublicTemplate();
            $r->user_id = Auth()->user()->id;
            $r->template_id = $id;
            $r->category_id = $template->category_id;
            $r->is_accepted = 0;
            if($r->save()){
                return back();
            }
        }   
    }

    //chap nhan request public template cua user tu request
    //nút chấp nhận trong mục "hành động"
    public function publicTemplate(Request $req){
        if ($req->request_id) {
            $re = RequestPublicTemplate::where('id',$req->request_id)->first();
            $re->is_accepted = 1;
            $re->save();
            $temp = Template::where('id',$re->template_id)->first();
            $temp->is_public = 2;
            $temp->save();
        }elseif($req->template_id){
            $temp = Template::where('id',$req->template_id)->first();
            $temp->is_public = 2;
            $temp->save();
        }
		$template = new Template();
            $template->name = $req->name;
            $template->content = $temp->content;
            $template->category_id = $req->category;
            $template->user_id = Auth()->user()->id;
            $template->type = 1;
            $template->is_public = 2;
            $template->save();
            if(count($req->tag) > 0){
                foreach ($req->tag as $key => $value) {
                    $tag_template = new TagTemplate();
                    $tag_template->tag_id = $value;
                    $tag_template->template_id = $template->id;
                    $tag_template->save();
                }
            }
		return back()->with(["clear"=>"Clear local storage"]);
    	
    }


    //Khong chap nhan request public template cua user
    public function notAccept($id){
    	$template = TemplatePersonal::where('id',$id)->first();
    	$template->is_public = 0;
    	$template->save();
    	return back();
    }
}
