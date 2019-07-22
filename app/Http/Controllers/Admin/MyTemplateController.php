<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\RequestPublicTemplate;
use App\Category;
use App\Tag;

class MyTemplateController extends Controller
{
	public function __construct()
    {
        $this->middleware('auth', ['except' => ['logout']]);
        $count_request = RequestPublicTemplate::where('is_accepted',0)->count();
        \View::share('count_request', $count_request);
    }

    public function index(){
    	$category = Category::where('user_id',Auth()->user()->id)->paginate(10);
    	$tag = Tag::where('user_id', Auth()->user()->id)->get();
    	return view('admin.my-template',compact('category','tag'));
    }
}
