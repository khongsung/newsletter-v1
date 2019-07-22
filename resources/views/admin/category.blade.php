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
                            <input type="text" name="searchkey" id="searchkey" data-table="template" class="form-control pull-right" placeholder="Nhập tên danh mục">
							<div id="result"></div>
                            {{ csrf_field() }}
	                    </div>
                	</div>
                	<script>
                		
                	</script>
                </div>
			</div>
    		@if(count($category) > 0)
    		<div class="panel-group" id="accordion">
    			@foreach($category as $t)
			  	<div class="panel panel-default">
			    	<div class="panel-heading">
			      	<h4 class="panel-title">
			        	<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#t{{$t->id}}">
			        	<label class="" style="font-size: 14px; font-weight: 700;line-height: 23px;">Tên danh mục: {{ $t->name }}, Mô tả: {{$t->description != '' ? $t->description : 'null'}}, ( Số lượng: {{count($t->TemplateUser)}}) </label>
			        	</a>
			      	</h4>
			    	</div>
			    	<div id="t{{$t->id}}" class="panel-collapse collapse">
			      		<div class="panel-body">
			        		<div class="list-group">
				          		@if(count($t->TemplateUser) > 0)
								<div class="box-body table-responsive no-padding" style="overflow: unset;">
									<table class="table table-hover table-bordered text-center" >
										<tr>
											<th>#</th>
											<th>Tên</th>
											<th>Nội dung</th>
										</tr>
										@foreach($t->TemplateUser as $template)
										<tr>
											<td>#{{$template->id}}</td>
											<td>{{$template->name}}</td>
											<td><a href="javascript:void(0)" data-toggle="modal" class="btn btn-success templatePreview" value='{{ $template->content }}' data-id-template="{{$template->id}}"><i class="fa fa-eye" aria-hidden="true"></i> Xem </a></td>
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
			  {{ $category->links() }}
			</div>

			@else
			<i  style="padding-left: 10px;">Không có danh mục nào</i>
			@endif
		</div> 
	</div>
</section>

@endsection
