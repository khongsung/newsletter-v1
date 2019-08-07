<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Category;
use File;
use Auth;
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

    public function uploadImage(Request $request) {
        $this->validate($request, [
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        if($request->hasFile('file')) {
            $image = $request->file('file');
            $name = time() . $image->getClientOriginalName();
            $name = str_replace(' ', '', $name);
            $destinationPath = public_path('/images/'. Auth::id() .'/');
            $image->move($destinationPath, $name);
            $path = '/images/'. Auth::id() . '/' . $name;
            echo $name . '|' . $path;
        }
    }

    public function getAllImages() {
        $host = $actual_link = 'http://'.$_SERVER['HTTP_HOST'];
        $path = 'images/' . Auth::id();
        $arr = [];
        $files = File::allFiles($path);
        foreach ($files as $path) {
            $file = pathinfo($path);
            $pathName = $file['dirname'] . '/' . $file['basename'];
            $arr[] = $pathName;
        }

        echo json_encode($arr);
    }

    public function deleteImage(Request $request) {
        $value = $request->value;
        if(file_exists($value)) {
            unlink($value);
            return "deleted";
        } else {
            echo "file not exist";
        }
    }

    public function addImage(Request $request) {
        $url = $request->url;
        $path = 'images/'. Auth::id() . '/';
        $name = time() . '.png';
        $img = $path . $name;
        if(file_put_contents($img, file_get_contents($url))) {
            echo $img;
        } else {
            echo '';
        }
    }
}
