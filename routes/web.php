<?php

//backend
Route::prefix('/')->group(function(){
  	Route::get('/', 'Admin\AdminController@index')->name('admin');
    //request
    Route::get('/request','Admin\RequestController@index')->name('admin.request');
    Route::get('/requestPublicTemplate/{id}','Admin\RequestController@requestPublicTemplate')->name('admin.request.requestPublicTemplate');
    Route::post('/public-template','Admin\RequestController@publicTemplate')->name('admin.request.publicTemplate');
    Route::get('/not-accept/{id}','Admin\RequestController@notAccept')->name('admin.request.notAccept');

    //user
    Route::get('/all-user','Admin\UserController@index')->name('admin.user');


    //my-template
  	Route::get('/my-template','Admin\MyTemplateController@index')->name('admin.my-template');



    //all template
  	Route::get('/all-template','Admin\AllTemplateController@index')->name('admin.all-template');
    //Route::get('/public-template/{id}','Admin\AllTemplateController@publicTemplateById')->name('admin.all-template.publicTemplateById');
    Route::post('/postAddTemplate','Admin\AllTemplateController@postAddTemplate')->name('admin.all-template.postAddTemplate');


    //template-public
  	Route::get('/template-public','Admin\TemplatePublicController@index')->name('admin.template-public');
    Route::get('/change-status/{id}','Admin\TemplatePublicController@changeStatus')->name('admin.template-public.changeStatus');


  	Route::get('/get-category','Admin\AdminController@getCategory')->name('admin.getCategory');
  	Route::post('/add-category','Admin\AdminController@addCategory')->name('admin.addCategory');
    Route::post('/add-tag','Admin\AdminController@addTag')->name('admin.addTag');
    Route::get('/get-tag','Admin\AdminController@getTag')->name('admin.getTag');
  	Route::post('/postEditTemplate','Admin\AdminController@postEditTemplate')->name('admin.postEditTemplate');
    
    //login as
    Route::get('/login-as/{id}','Admin\AdminController@loginAs')->name('admin.login-as');

    //search
    Route::post('search', 'Admin\AdminController@getSearchAjax')->name('admin.postSearch');

    //category
    Route::get('/my-category','Admin\CategoryController@index')->name('admin.my-category');


    //tag
    Route::get('/my-tag','Admin\TagController@index')->name('admin.my-tag');
    //exportlink
    Route::get('view-templateid={id}', 'Admin\AdminController@viewTemplate')->name('admin.viewTemplate');

});
//front_end

	/*get view*/
	//home
  Route::prefix('design')->group(function(){
  	Route::get('/','Frontend\HomeController@index')->name('frontend.home');
    Route::get('/guide','Frontend\HomeController@guide')->name('frontend.guide');
  	Route::post('/save-template','Frontend\TemplateController@addNewTemplate')->name('template.addNewTemplate');
  	
    Route::get('/get-template','Frontend\TemplateController@getTemplate')->name('template.getTemplate');
  	//Route::get('/get-template-public','Frontend\TemplateController@getTemplatePublic')->name('template.getTemplatePublic');
  });
 
  Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/edittid={id}','Admin\AdminController@getEdit')->name('getEdit');
