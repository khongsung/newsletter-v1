<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
   	public function User(){
    	return $this->belongsTo('App\User','user_id','id');
    }
    public function Category(){
    	return $this->belongsTo('App\Category','category_id','id');
    }
    public function Tag(){
    	return $this->belongsToMany('App\Tag','tag_templates','template_id','tag_id');
    }

}
