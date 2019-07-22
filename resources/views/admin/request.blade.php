@extends('admin.layouts.master')
@section('content')
    <div class="row">
    	<div class="col-md-12">
    		<div class="box">
                <div class="box-header">
                    <h3 class="box-title">Danh sách yêu cầu</h3>
                </div>
    		</div>
    		@if(count($request_public_template) > 0)
			<div class="box-body table-responsive no-padding">
				<table class="table table-hover table-bordered text-center" style="position: absolute;">
					<tr>
						<th>ID</th>
						<th>Tác giả</th>
						<th>Tên</th>
						<th>Nội dung</th>
						<th>Danh mục</th>
						<th>Hành động</th>
						<th>Trạng thái</th>
					</tr>
					@foreach($request_public_template as $re)
					<tr>
						<td>#{{$re->id}}</td>
						<td>{{$re->User->name}}</td>
						<td>{{$re->TemplateUser->name}}</td>
						<td><a href="javascript:void(0)" data-toggle="modal" class="btn btn-success templatePreview" value='{{ $re->TemplateUser->content }}' data-id-template="{{$re->TemplateUser->id}}"><i class="fa fa-eye" aria-hidden="true"></i> Xem</a></td>
						<td>{{$re->Category->name}}</td>
						<td>
							<div class="dropdown">
				                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Chọn <span class="caret"></span></a>
				                <ul class="dropdown-menu" role="menu">
				                	@if($re->is_accepted == 1)
									<li class="active" style="background: #3c8dbc;"><i class="fa fa-check" aria-hidden="true"></i> Public</li>

				                	@else
				                	<li class="{{ $re->is_accepted == 1 ? 'active' : ''}}"><a class="confirmPublic" href="javascript:void(0)"  data-id-request="{{$re->id}}" data-toggle="modal">Chấp nhận</a></li>
				                    <li class="{{ $re->is_accepted == 0 ? 'active' : ''}}"><a href="{{ route('admin.request.notAccept',$re->TemplateUser->id) }}">Chưa chấp nhận</a></li>
				                	@endif
				                   
				                </ul>
			              	</div>
						</td>
						<td>
							@if($re->is_accepted == 1)
							<label for="" class="label label-success"><i class="fa fa-check" aria-hidden="true"></i> Đã duyệt</label>
							@else
							<label for="" class="label label-danger"><i class="fa fa-ban" aria-hidden="true"></i> Chưa duyệt</label>
							@endif
						</td>
					</tr>
					@endforeach
				</table>
			</div>
			@else
			<div class="box-body">
				<i>Không có yêu cầu nào</i>
			</div>
			@endif
		</div> 
	</div>
@endsection
