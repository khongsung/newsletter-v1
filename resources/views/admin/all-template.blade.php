@extends('admin.layouts.master')
@section('content')
	<div class="row">
		<div class="col-md-12">
			<div class="box">
                <div class="box-header">
                    <h3 class="box-title">Xem tất cả thiết kế của thành viên</h3>
                    
                    <div class="box-tools">
                        <div class="input-group input-group-sm" style="width: 170px;">
                            <input type="text" name="searchkey" id="searchkey" data-table="template" class="form-control pull-right" placeholder="Nhập tên người dùng">
							<div id="result"></div>
                            {{ csrf_field() }}
	                    </div>
                	</div>
                </div>
    		</div>
    		<h4 style="padding-left: 10px;">Thành viên</h4>
    		@if(count($user) > 0)
    		<div class="panel-group" id="accordion">
    			@foreach($user as $u)
			  	<div class="panel panel-default">
			    	<div class="panel-heading">
			      	<h4 class="panel-title">
			        	<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#t{{$u->id}}">
			        	<label class="" style="font-size: 14px; font-weight: 700;line-height: 23px;">{{ $u->name }} {{ ($u->id == Auth()->user()->id) ? '(tôi)' : '' }} ({{ $u->email }}) ( Số lượng: {{count($u->TemplatePersonal)}}) </label>
			        	</a>
			      	</h4>
			    	</div>
			    	<div id="t{{$u->id}}" class="panel-collapse collapse">
			      		<div class="panel-body">
			        		<div class="list-group">
				          		@if(count($u->TemplatePersonal) > 0)
					<div class="box-body table-responsive no-padding" style="overflow: unset;">
						<table class="table table-hover table-bordered text-center" >
							<tr>
								<th>#</th>
								<th>Danh mục</th>
								<th>Tên</th>
								<th>Tags</th>
								<th>Nội dung</th>
								<th>Hành động</th>
								<th>Trạng thái</th>
							</tr>
							@foreach($u->TemplatePersonal as $template)
							<tr>
								<td>#{{$template->id}}</td>
								<td>{{$template->Category->name}}</td>
								<td>{{$template->name}}</td>
								<td>
									@foreach($u->TagTemplate as $tagTemplate)
									@foreach($u->Tag as $tag)
										@if($tagTemplate->tag_id == $tag->id && $template->id == $tagTemplate->template_id)
										#{{$tag->name}},
										@endif
									@endforeach
									@endforeach
								</td>
								<td><a href="javascript:void(0)" data-toggle="modal" class="btn btn-success templatePreview" value='{{ $template->content }}' data-id-template="{{$template->id}}"><i class="fa fa-eye" aria-hidden="true"></i> Xem </a></td>
								<td>
									<div class="dropdown">
						                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Chọn <span class="caret"></span></a>
						                <ul class="dropdown-menu" role="menu">
						                    @if($template->is_public == 2 )
						                    <li class="active" style="background: #3c8dbc;"><i class="fa fa-check" aria-hidden="true"></i> Public</li>
						                    @else
											
											<li class="{{$template->is_public != 0 ? 'active' : ''}}"><a disabled="{{ $template->is_public == 2 ? 'disabled' : 'false' }}" class="modalPublic" href="javascript:void(0)"  data-id-template="{{$template->id}}" data-toggle="modal">Public</a></li>
						                    @endif
						                </ul>
					                    
					              	</div>
								</td>
								<td>
									@if($template->is_public == 0)
									<label for="" class="label label-warning"><i class="fa fa-ban" aria-hidden="true"></i> Not Public</label>
									@endif
									@if($template->is_public == 1)
									<label for="" class="label label-success"> Pending</label>
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
					<p>Không có template nào</p>
					@endif
			        		</div>
			      		</div>
			    	</div>
			  	</div>
			  @endforeach
			  {{ $user->links() }}
			</div>
			@else
			<i  style="padding-left: 10px;">Không có thành viên nào</i>
			@endif
		</div>
	</div>
@endsection