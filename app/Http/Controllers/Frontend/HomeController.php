<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
use File;
use App\Template;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['logout', 'guide']]);
    }
    function index(){
        $template_public = Template::where('type',1)->where('is_public',2)->get();
    	$category = Category::get();
    	if (Auth()->check()) {
    		$template_user = Template::where('type',0)->where('user_id',Auth()->user()->id)->get();
    		return view('frontend.index',compact('category','template_public','template_user'));
    	}else{
    		return view('frontend.index',compact('category','template_public'));
    	}
    }

    public function guide(){
        return view('frontend.guide');
    }
}
