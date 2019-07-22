
	<ul class="panel">
		<li><a class="nav-header" data-toggle="collapse" data-parent="#accordion" href="#collapse-template-public">Template Public</a></li>
		<li id="collapse-template-public" class="boxes left-item panel-collapse collapse" >
			@if(count($template_public) > 0)
			@foreach($template_public as $t_p)
			<div class="item-public" value="{{ $t_p->id }}">
				<span>{{ $t_p->name }}</span>
				<label class="btn btn-basic drag">drag</label>
			</div>
			@endforeach
			@else
			<div class="item-user" value="" >
				<span>empty</span>
			</div>
			@endif
		</li>
	</ul>