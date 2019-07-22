<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function Admin(){
    	return $this->belongsTo('App\User','user_id','id')->where('role',1);
    }
    public function TemplatePersonal(){
    	return $this->belongsToMany('App\Template','tag_templates','tag_id','template_id')->where('type',0);
    }
    public function TemplatePublicForAdmin(){
    	return $this->belongsToMany('App\Template','tag_templates','tag_id','template_id')->where('type',1);
    }
    public function TemplatePublicForUser(){
    	return $this->belongsToMany('App\Template','tag_templates','tag_id','template_id')->where('type',1)->where('is_public',2);
    }
}
