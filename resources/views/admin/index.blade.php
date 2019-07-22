@extends('admin.layouts.master')
@section('content')
<section class="content">
	@foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
    @endforeach
    <div class="row">
    	@if(Auth()->user()->role == 1)
    	<div class="col-lg-3 col-xs-6 ">
    		<div class="small-box bg-aqua">
			    <div class="inner">
			    	<p>Yêu cầu</p>
				  	<h3>{{$count_request}}</h3>			    
				</div>
			    <div class="icon">
			      	<i class="ion ion-bag"></i>
			    </div>
			    <a href="{{ route('admin.request') }}" class="small-box-footer">Xem thêm <i class="fa fa-arrow-circle-right"></i></a>
			</div>
    	</div>
    	@endif
    	<div class="col-lg-3 col-xs-6">
    		<div class="small-box bg-green">
			    <div class="inner">
			    	<p>Bản thiết kế công khai</p>
				  	<h3>{{$template_public}}</h3>			    
				</div>
			    <div class="icon">
			      	<i class="ion ion-bag"></i>
			    </div>
			    <a href="{{ route('admin.template-public') }}" class="small-box-footer">Xem thêm <i class="fa fa-arrow-circle-right"></i></a>
			</div>
    	</div>
    	@if(Auth()->user()->role == 1)
    	<div class="col-lg-3 col-xs-6">
    		<div class="small-box bg-yellow">
			    <div class="inner">
			    	<p>Tất cả Thiết kế của người dùng</p>
				  	<h3>{{$all_template}}</h3>			    
				</div>
			    <div class="icon">
			      	<i class="ion ion-bag"></i>
			    </div>
			    <a href="{{ route('admin.all-template') }}" class="small-box-footer">Xem thêm <i class="fa fa-arrow-circle-right"></i></a>
			</div>
    	</div>
    	@endif
    	<div class="col-lg-3 col-xs-6">
    		<div class="small-box bg-orange">
			    <div class="inner">
			    	<p>Thiết kế của tôi</p>
				  	<h3>{{count($my_template)}}</h3>			    
				</div>
			    <div class="icon">
			      	<i class="ion ion-bag"></i>
			    </div>
			    @if(count($my_template) > 0)
			    <a href="{{ route('admin.my-template') }}" class="small-box-footer">Xem thêm <i class="fa fa-arrow-circle-right"></i></a>
			    @else
				<a href="{{ route('frontend.home') }}" class="small-box-footer"><i class="fa fa-plus-circle"></i> Thêm mới </a>
			    @endif
			</div>
    	</div>
	</div>
</section>

@endsection
