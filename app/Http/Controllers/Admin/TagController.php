<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tag;
use App\RequestPublicTemplate;
class TagController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth',['except' => ['logout']]);
        $count_request = RequestPublicTemplate::where('is_accepted',0)->count();
        \View::share('count_request', $count_request);
    }

    //home
    public function index()
  	{
        $tag = Tag::where('user_id',Auth()->user()->id)->paginate(10);
        return view('admin.tag',compact('tag'));
  	}
}
