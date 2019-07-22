@extends('admin.layouts.master')
@section('content')
	<div class="row">
		<div class="col-md-12">
			<div class="box">
                <div class="box-header">
                    <h3 class="box-title">Thiết kế của tôi</h3>
                    <div class="box-tools">

                        <div class="box-tools">
                        <div class="input-group input-group-sm" style="width: 170px;">
                            <input type="text" name="searchkey" id="searchkey" data-table="template" class="form-control pull-right" placeholder="Nhập tên danh mục">
							<div id="result"></div>
                            {{ csrf_field() }}
	                    </div>
                	</div>
                    </div>
                </div>
    		</div>
    		<h4 style="padding-left: 10px;">Danh mục</h4>
			<div class="panel-group" id="accordion">
    			@if(count($category) > 0)
    			@foreach($category as $cate)
			  	<div class="panel panel-default">
			    	<div class="panel-heading">
			      	<h4 class="panel-title">
			        	<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#t{{$cate->id}}">
		        		
						<label class="" style="font-size: 14px; font-weight: 700;line-height: 23px;">{{ $cate->name }} ( Số lượng: {{count($cate->TemplateUser)}})</label>
			        	
			        	</a>
			      	</h4>
			    	</div>
			    	<div id="t{{$cate->id}}" class="panel-collapse collapse">
			      		<div class="panel-body">
			        		<div class="list-group">
				          		@if(count($cate->TemplateUser) > 0)
								<div class="box-body table-responsive no-padding" style="overflow: unset;" >
									<table class="table table-hover table-bordered text-center" >
										<tr>
											<th>#</th>
											<th>Tác giả</th>
											<th>Tên</th>
											<th>Tags</th>
											<th>Nội dung</th>
											<th>Hành động</th>
											<th>Trạng thái</th>
										</tr>
										@foreach($cate->TemplateUser as $template)
										
										<tr>
											<td>#{{$template->id}}</td>
											<td>{{$template->User->name}}</td>
											<td>{{$template->name}}</td>
											<td>
												@foreach($cate->TagTemplate as $tagTemplate)
												@foreach($tag as $ta)
													@if($tagTemplate->tag_id == $ta->id && $template->id == $tagTemplate->template_id)
													#{{$ta->name}} ,
													@endif
												@endforeach
												@endforeach
											</td>
											<?php $str = $template->content; ?>
											<td><a href="javascript:void(0)" data-toggle="modal" class="btn btn-success templatePreview"  data-id-template="{{$template->id}}"><i class="fa fa-eye" aria-hidden="true"></i> Xem</a></td>
											<td>
												<div class="dropdown">
									                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Chọn <span class="caret"></span></a>
									                <ul class="dropdown-menu" role="menu">
									                	@if(Auth()->user()->role == 1)
										                	@if($template->is_public == 2)
										                    <li class="active" style="background: #3c8dbc;"><i class="fa fa-check" aria-hidden="true"></i> Public</li>
										                    @else
															
															<li class="{{$template->is_public != 0 ? 'active' : ''}}"><a disabled="{{ $template->is_public == 2 ? 'disabled' : 'false' }}" class="modalPublic" href="javascript:void(0)"  data-id-template="{{$template->id}}" data-toggle="modal">Public</a></li>
										                    @endif
									                    @else 
									                    	@if($template->is_public != 0)
																<li class="active" style="background: #3c8dbc;"><i class="fa fa-check" aria-hidden="true"></i> Send request public</li>
									                    	@else
									                    	<li ><a href="{{route('admin.request.requestPublicTemplate',$template->id)}}">Send request public</a></li>
									                    	@endif
														
									                    @endif
									                </ul>
								              	</div>
											</td>
											<td>
												@if($template->is_public == 0)
												<label for="" class="label label-warning"><i class="fa fa-ban" aria-hidden="true"></i> Not Public</label>
												@endif
												@if($template->is_public == 1)
												<label for="" class="label label-default"> Pending</label>
												@endif
												@if($template->is_public == 2)
												<label for="" class="label label-success"><i class="fa fa-check" aria-hidden="true"></i> Public</label>
												@endif
											</td>
										</tr>
										@endforeach
									</table>
								</div>
								@else
			 					<p style="padding-left: 10px;">Không có bản thiết kế nào</p>
								@endif
			        		</div>
			      		</div>
			    	</div>
			  	</div>
			  @endforeach
			  {{ $category->links() }}
			  @else
			  <p style="padding-left: 10px;">Không có bản thiết kế nào</p>
			  @endif
			</div>
		</div>
	</div>
@endsection