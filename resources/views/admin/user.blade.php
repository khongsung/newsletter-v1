@extends('admin.layouts.master')
@section('content')
<section class="content">
    <div class="row">
    	<div class="col-md-12">
    		<div class="box">
                <div class="box-header">
                    <h3 class="box-title">Danh sách thành viên</h3>
                    <div class="box-tools">
                        <div class="input-group input-group-sm" style="width: 170px;">
                            <input type="text" name="searchkey" id="searchkey" data-table="users" class="form-control pull-right" placeholder="Nhập tên người dùng">
							<div id="result"></div>
                            {{ csrf_field() }}
	                    </div>
                	</div>
                	<script>
                		
                	</script>
                </div>
			</div>
    		@if(count($user) > 0)
			<div class="box-body no-padding">
				<table class="table table-hover table-bordered text-center"  >
					<tr>
						<th>ID</th>
						<th>Tên</th>
						<th>Email</th>
						<th>Quyền</th>
						<th style="width: 1%;">Số lượng Template</th>
						<th>Hành động</th>
						<th></th>
					</tr>
					@foreach($user as $u)
					<tbody id="myTable">
						<tr>
							<td>#{{$u->id}}</td>
							<td>{{$u->name}}</td>
							<td>{{$u->email}}</td>
							<td class="form-group " style="text-align: -webkit-center;">
								<select name="" id="" class="form-control" style="width: 50%;">
									<option {{$u->role == 1 ? 'selected' : '' }} onclick="changeRole({{$u->role}})">Quản trị</option>
									<option {{$u->role == 0 ? 'selected' : '' }} onclick="changeRole({{$u->role}})">Thành viên</option>
								</select>
							</td>
							<td>{{ count($u->TemplatePersonal) }}</td>
							<td>
								@if($u->role == 0)
								<div class="dropdown">
					                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Chọn <span class="caret"></span></a>
					                <ul class="dropdown-menu" role="menu">
					                   <li><a href="{{ route('admin.login-as',$u->id) }}" >Đăng nhập với tư cách <span style="color: red;">{{$u->name}}</span></a></li>
					                </ul>
				              	</div>
								@endif
							</td>
						</tr>
					</tbody>
					@endforeach

				</table>

			</div>

			@else
			<p>Không có thành viên nào</p>
			@endif
		</div> 

	</div>
	{{ $user->links() }}
</section>


@endsection
