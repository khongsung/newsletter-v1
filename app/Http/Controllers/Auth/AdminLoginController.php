<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use Session;

class AdminLoginController extends Controller
{
  public function __construct()
  {
      $this->middleware('guest:admin', ['except'=>['logout']]);
  }
  public function showLoginForm()
  {
      return view('auth.admin-login');
  }
  public function login(Request $req)
  {
      // Validate the form data
      $this->validate($req,[
          'email'=>'required|email',
          'password'=>'required|min:6',
      ]);
      // Attempt to log the user in
      if(Auth::guard('admin')->attempt(['email'=>$req->email, 'password'=>$req->password])) {
        return redirect()->intended(route('admin'));
        }else{

            return back()->with(['error'=>'Tài khoản hoặc mật khẩu sai!']);
        }
  }

  public function logout()
  {
      Auth::guard('admin')->logout();
      return redirect()->route('admin.login');
  }
}
