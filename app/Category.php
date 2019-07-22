<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function TemplateUser(){
    	return $this->hasMany('App\Template','category_id','id')->where('type', 0);
    }
    public function TemplatePublic(){
    	return $this->hasMany('App\Template','category_id','id')->where('type', 1);
    }

    public function TagTemplate(){
        return $this->hasManyThrough(
            'App\TagTemplate',
            'App\Template',
            'category_id', // Foreign key on users table...
            'template_id', // Foreign key on posts table...
            'id', // Local key on countries table...
            'id' // Local key on users table...
        );
    }
    public function TemplatePublicForUser(){
        return $this->hasMany('App\Template','category_id','id')->where('type',1);
    }

}
