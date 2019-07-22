<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\RequestPublicTemplate;
use App\Category;
use App\User;
use App\Template;
use App\Tag;

class TemplatePublicController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['logout']]);
        $count_request = RequestPublicTemplate::where('is_accepted',0)->count();
        \View::share('count_request', $count_request);
    }

    public function index(){
        $user = User::select('id')->where('role',1)->get();
        $tag = Tag::whereIn('user_id',$user)->paginate(10);
        return view('admin.template-public',compact('tag'));
    	
    }

    //an/hien template public ben trang user
    public function changeStatus($id){
    	$template = Template::where('id',$id)->first();
    	if ($template->is_public == 2) {
    		$template->is_public = 0;
    	}else{
    		$template->is_public = 2;
    	}
    	if ($template->save()) {
    		return back();
    	}
    }
}
