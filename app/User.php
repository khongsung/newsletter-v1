<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function TemplatePersonal(){
        return $this->hasMany('App\Template','user_id','id')->where('type', 0);
    }

    public function Category(){
        return $this->hasMany('App\Category','user_id','id');
    }   
    public function Tag(){
        return $this->hasMany('App\Tag','user_id','id');
    }

    public function TagTemplate(){
        return $this->hasManyThrough(
            'App\TagTemplate',
            'App\Template',
            'user_id', // Foreign key on users table...
            'template_id', // Foreign key on posts table...
            'id', // Local key on countries table...
            'id' // Local key on users table...
        );
    }
}
