<?php $url = 'frontend.layouts.partitals.right-edit.' ?>

<div class="sidebar-nav">
	
	<ul class="nav nav-tabs">
		<li class="active"><a data-toggle="tab" href="#properties-edit">Properties</a></li>
		<li class="tab-code"><a data-toggle="tab" href="#code-edit">Code</a></li>
	</ul>
	
	<div class="tab-content">
		<div id="properties-edit" class="tab-pane fade in active">
			<div class="edit-box"></div>
			
			<div class="edit-base two-color">

				<div id="setting" class="base-setting">
					@include($url.'setting')
				</div>

				<div id="text" class="base base-text" style="display: none;">
					@include($url.'typography')
				</div>

				<div id="general" class="base base-general">
					@include($url.'general')
				</div>

				<div id="dimension" class="base base-dimension sector sector__dimension no-select">
					@include($url.'dimention')
				</div>

				<div id="decorations" class="base base-decorations sector sector__decorations no-select">
					@include($url.'decorations')
				</div>

				<div class="base base-flex sector sector__flex no-select">
					@include($url.'flex')
				</div>

			</div>
		</div>

		<div id="code-edit" class="code-edit tab-pane fade">
			<h4>CSS</h4>
			<div class="code-edit--css">
				<pre style="overflow: hidden;">
					<code class="css">
					</code>
				</pre>
			</div>
		</div>
	</div>

	<div class="modal fade" role="dialog" id="md-ckeditor" data-keyboard="false" data-backdrop="static">
		<div class="modal-dialog" style="width: 80%;">
			<div class="modal-content">
				<div class="modal-body">
					<textarea name="editor" id="editor-ck" cols="80" rows="50"></textarea>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" id="editor-confirmOk">Ok</button>
					<button type="button" class="btn btn-default" data-dismiss='modal' id="editor-confirmCancel">Cancel</button>
				</div>
			</div>
		</div>
	</div>
</div>