<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RequestPublicTemplate extends Model
{
    public function User()
	{
	    return $this->belongsTo('App\User','user_id','id');
	}
	public function Category(){
		return $this->belongsTo('App\Category','category_id','id');
	}
	public function TemplateUser() {
		return $this->hasOne('App\Template', 'id', 'template_id')->where('type',0);
	}
}
