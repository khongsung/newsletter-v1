<div class="" id="side-bar">

	<ul class="nav nav-tabs">
		<li class="tab-item-drag active"><a data-toggle="tab" href="#item-drag">Item</a></li>
		<li class="tab-tree-data"><a data-toggle="tab" href="#tree-data">Tree</a></li>
	</ul>

	<div class="tab-content">
		<div id="item-drag" class="tab-pane active">

			<div class="sidebar-nav" id="accordion">
				<ul class="panel">
					<li><a class="nav-header" data-toggle="collapse" data-parent="#accordion" href="#collapse-grid">Grid System</a></li>
					<li id="collapse-grid" class="rows left-item panel-collapse collapse in">
						<div class="lyrow">
							<input type="text" value="10">
							<label class="btn btn-basic drag">1 column</label>
						</div>
						<div class="lyrow">
							<input type="text" value="5 5">
							<label class="btn btn-basic drag">2 columns</label>
						</div>
						<div class="lyrow">
							<input type="text" value="3 7">
							<label class="btn btn-basic drag">2 col 3/7</label>
						</div>
						<div class="lyrow">
							<input type="text" value="3.3 3.3 3.3">
							<label class="btn btn-basic drag">3 columns</label>
						</div>

						<div class="lyrow" title="total grid = 10">
							<input type="text" value="" placeholder="ex: 2 8">
							<label class="btn btn-info drag" style="display: none;">drag</label>
						</div>
					</li>
				</ul>
				<hr>

				<ul class="panel">
					<li><a class="nav-header" data-toggle="collapse" data-parent="#accordion" href="#collapse-base-css">Base css</a></li>
					<li id="collapse-base-css" class="boxes base-css left-item panel-collapse collapse"></li>
				</ul>
				<hr>
				
				<div class="left-search">
					<input type="text" placeholder="tag..." id="search_key">
					<button><i class="fa fa-search" aria-hidden="true" id="search_button"></i></button>
					{{ csrf_field() }}
				</div>

				@include('frontend.layouts.partitals.my-template')

				@include('frontend.layouts.partitals.template-public')
			</div>
		</div>

		<div id="tree-data" class="tab-pane">
		</div>

	</div>

</div>