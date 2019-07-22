<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
use App\RequestPublicTemplate;
class CategoryController extends Controller
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
        $category = Category::where('user_id',Auth()->user()->id)->paginate(10);
        return view('admin.category',compact('category'));
  	}
}
