<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\RequestPublicTemplate;
use App\User;

class UserController extends Controller
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
        if (Auth()->user()->role != 1) {
            return redirect()->route('admin');
        }
        $user = User::paginate(10);
        return view('admin.user',compact('user')); 
  	}
}
