@extends('admin.layouts.master')
@section('content')
	<div class="row">
		<div class="col-md-12">
			<div class="box">
                <div class="box-header">
                    <h3 class="box-title">Bản thiết kế công khai</h3>

                    <div class="box-tools">
                        <div class="input-group input-group-sm" style="width: 170px;">
                            <input type="text" name="searchkey" id="searchkey" data-table="template" class="form-control pull-right" placeholder="Nhập tên tag">
							<div id="result"></div>
                            {{ csrf_field() }}
	                    </div>
                	</div>
                </div>
    		</div>
			<h4 style="padding-left: 10px;">Thẻ Tag</h4>
			<div class="panel-group" id="accordion">
				@if(count($tag) > 0)
    			@foreach($tag as $val)
				<div class="panel panel-default">
			    	<div class="panel-heading">
				      	<h4 class="panel-title">
				        	<label for=""><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#t{{$val->id}}">#{{$val->name}} (Số lượng:
				        	@if(Auth()->user()->role ==1)
				        	{{count($val->TemplatePublicForAdmin)}}
				        	@else
				        	{{count($val->TemplatePublicForUser)}}
				        	@endif)
				        	</a></label>
				      	</h4>
			    	</div>
			    	<div id="t{{$val->id}}" class="panel-collapse collapse">
			      		<div class="panel-body">
			        		<div class="list-group">
								<div class="box-body  no-padding" >
									
									<table class="table table-hover table-bordered text-center" >
										<tr>
											<th>#</th>
											<th>Tên</th>
											<th>Danh mục</th>
											<th>Nội dung</th>
											@if(Auth()->user()->role == 1)
											<th>Hành động</th>
											<th>Trạng thái</th>
											@endif
										</tr>
										@if(Auth()->user()->role ==1)
											@if(count($val->TemplatePublicForAdmin) >0)
												@foreach($val->TemplatePublicForAdmin as $template)
												<tr>
													<td>#{{$template->id}}</td>
													<td>{{$template->name}}</td>
													<td>{{$template->Category->name}}</td>
													<td><a href="javascript:void(0)" data-toggle="modal" class="btn btn-success templatePreview" data-id-template="{{$template->id}}"><i class="fa fa-eye" aria-hidden="true"></i> Xem</a></td>
													<td>
														<div class="dropdown">
											                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Chọn <span class="caret"></span></a>
											                <ul class="dropdown-menu" role="menu">
											                    <li class="{{ $template->is_public == 2 ? 'active' : ''}}"><a href="{{route('admin.template-public.changeStatus',$template->id)}}">Public</a></li>
										                     	<li class="{{ $template->is_public == 0 ? 'active' : ''}}"><a href="{{route('admin.template-public.changeStatus',$template->id)}}">No Public</a></li>
											                </ul>
										              	</div>
													</td>
													
													<td>
														@if($template->is_public == 0)
														<label for="" class="label label-warning"><i class="fa fa-ban" aria-hidden="true"></i> Not Public</label>
														@elseif($template->is_public == 2)
														<label for="" class="label label-success"> Public</label>
														@endif
													</td>
												</tr>
												@endforeach
											@else
											@endif
										@else
											@if(count($val->TemplatePublicForUser) > 0)
												@foreach($val->TemplatePublicForUser as $template)
													<tr>

														<td>#{{$template->id}}</td>
														<td>{{$template->name}}</td>
														<td>{{$template->Category->name}}</td>
														<td><a href="javascript:void(0)" data-toggle="modal" class="btn btn-success templatePreview" data-id-template="{{$template->id}}"><i class="fa fa-eye" aria-hidden="true"></i> Xem</a></td>
													</tr>
												@endforeach
											@else
											@endif
										@endif
									</table>
								</div>
			        		</div>
			      		</div>
			    	</div>
			  	</div>
				@endforeach
				{{ $tag->links() }}
    			@else
    			<i style="padding-left: 10px;">Không có Tag nào</i>
    			@endif
			</div>
    	</div>
	</div>
@endsection