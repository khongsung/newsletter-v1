<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Category;
use App\Template;
use App\TagTemplate;
use File;
use App\RequestPublicTemplate;
class TemplateController extends Controller
{
	public function __construct()
    {
    	$this->middleware('auth', ['except' => ['getTemplate']]);
    }
    public function index()
    {

    }
    public function addNewCategory(Request $req){ 
    	$category = new Category();
    	$category->name = $req->name;
    	$category->description = $req->description;
    	$category->user_id = Auth()->user()->id;
    	$category->save();
    	return back();
    }
    public function getCategory(){
    	if(!Auth::check()){
    		return "You must login before!!";
    	}else{ 
    		return Category::where('user_id',Auth()->user()->id)->get();
    	}
    }

    // them moi template
    public function addNewTemplate(Request $req){
		$template = new Template();
    	$template->name = $req->name;
        $content = (array) json_decode($req->content);
        $data = json_encode($content);
        $template->content = $data;
    	$template->category_id = $req->category;
        $template->type = 0;
    	$template->user_id = Auth()->user()->id;
        $template->save();
        if(count($req->tag) > 0){
            foreach ($req->tag as $key => $value) {
                $tag_template = new TagTemplate();
                $tag_template->tag_id = $value;
                $tag_template->template_id = $template->id;
                $tag_template->save();
            }
        }
        return redirect()->route('admin.my-template')->with(["clear"=>"Clear local storage"]);
    }
    
    public function getTemplate(Request $req){
    	return Template::where('id', $req->id)->first();
    }

    
}
