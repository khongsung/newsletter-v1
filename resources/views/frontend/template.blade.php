@extends('frontend.layouts.master')
@section('content')
<div class="wrapper">
	<div class="left">
		<nav id="sidebar" class="my-storage">
		    <ul class="list-unstyled components">
		      	<li class="">
		        	<a href="#myLayout" data-toggle="collapse" aria-expanded="false"><b>My Layout</b></a>
		        	<ul class="collapse list-unstyled" id="myLayout">
		        		@if(count($category) > 0)
						@foreach($category as $cate)
		          		<li>
		          			<a href="#categoryL{{$cate->id}}" data-toggle="collapse" aria-expanded="false">{{ $cate->name }}({{ count($cate->Layout) }})</a>
				        	<ul class="collapse list-unstyled" id="categoryL{{$cate->id}}">
				        		@foreach($cate->Layout as $temp)
				          		<li><a href="javascript:void(0);" style="color: #82c1f7;" onclick="showTemplate({{ $temp->id }})" style="text-decoration: none; color: #fff;">{{ $temp->name ? $temp->name : "empty"}}</a></li>
				          		@endforeach
				          	</ul>
				        </li>
		          		@endforeach
		          		@endif
		        	</ul>
		      	</li>
		      	<li>
			        <a href="#myTemplate" data-toggle="collapse" aria-expanded="false"><b>My Template</b></a>
		        	<ul class="collapse list-unstyled" id="myTemplate">
		        		@if(count($category) > 0)
						@foreach($category as $cate)
		          		<li>
		          			<a href="#categoryT{{$cate->id}}" data-toggle="collapse" aria-expanded="false">{{ $cate->name }}({{ count($cate->TemplateUser) }})</a>
				        	<ul class="collapse list-unstyled" id="categoryT{{$cate->id}}">
				        		@foreach($cate->TemplateUser as $temp)
				          		<li>
				          			<a href="javascript:void(0);"  onclick="showTemplate({{ $temp->id }})" style="text-decoration: none; padding-right: 0px !important; padding-left: 3px !important;">{{ $temp->name }}
				          				@if($temp->is_public == 0)
										<label class="label label-success " href="javascript:void(0);" onclick="requestPublicTemplate({{$temp->id}})" style="padding: 1px 5px !important; float: right; cursor: pointer;">Public</label>
										@endif
										@if($temp->is_public == 1)
										<label class="label label-warning" style=" float: right;">Pending</label>
										@endif
										@if($temp->is_public == 2)
										<label class="label label-success" style=" float: right;"><i class="fa fa-check" aria-hidden="true"></i> Public</label>
										@endif
				          			</a>
					          		
								</li>
				          		@endforeach
				          	</ul>
				        </li>
		          		@endforeach
		          		@endif
		        	</ul>
		      	</li>
		    </ul>

		    <ul class="list-unstyled CTAs">
		      	<li><a href="javascript:void(0);" class="btn btn-primary" onclick="addCategory()">Add new category</a></li>
		    </ul>
	  	</nav>
		@include('frontend.layouts.partitals.sidebar')
	</div>
	<div class="content col-md-9" id="content">
		<div id="loader"></div>
		<div id="sortable-area2" class="group">
		</div>
	</div>
	<div class="right">
		@include('frontend.layouts.partitals.edit')
	</div>
</div>
@endsection