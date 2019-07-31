<nav class="header navbar navbar-default" role="navigation">
	<div class="container-fluid">
		<a class="" href="{{ route('frontend.home') }}"> <img src="images/logo.png"></a>
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<span id="control">
				<button class="btn btn-basic btn-xs" id="edit" style="display: none;"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</button>
				<button class="btn btn-basic btn-xs" id="preview"><i class="fa fa-eye" aria-hidden="true"></i> Preview</button>
				<button class="btn btn-basic btn-xs" id="delete"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
				<button class="btn btn-basic btn-xs" id="save" onclick="save()"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
				<button id="export-file" onclick="exportZip()" class="btn btn-basic btn-xs"><i class="fa fa-download"></i> Export to .Zip</button>
			</span>	
		</div>
		<a href="{{ route('frontend.guide') }}" target="_blank" ><button class="btn btn-basic btn-xs"><i class="fa fa-file-text-o" aria-hidden="true"></i> Guide</button></a>
	</div>
</nav>

<div class="modal fade" tabindex="-1" role="dialog" id="modal" >
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h3 class="modal-title text-center"></h3>
			</div>
			<div class="modal-body">
				<form id="form" name="form" class="form-horizontal" method="POST"  enctype="multipart/form-data">
					{{ csrf_field() }}
					<div id="group"></div>
				</form>
			</div>
		</div>
	</div>
</div>

