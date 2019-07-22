@extends('frontend.layouts.master')
@section('content')
<div class="wrapper">
	<div class="left">
		@include('frontend.layouts.partitals.sidebar')
	</div>
	<div class="content" id="content">
		<div id="sortable-area2" class="group">
			
		</div>
	</div>
	<div class="right">
		@include('frontend.layouts.partitals.edit')
	</div>

	<div class="modal fade" role="dialog" id="md-html-embed" data-keyboard="false" data-backdrop="static">
		<div class="modal-dialog" style="width: 80%;">
			<div class="modal-content">
				<div class="modal-body">
					<textarea name="editor" id="editor-html-embed" cols="80" rows="50"></textarea>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" id="editor-confirmOk">Ok</button>
					<button type="button" class="btn btn-default" data-dismiss='modal' id="editor-confirmCancel">Cancel</button>
				</div>
			</div>
		</div>
	</div>


</div>


@endsection