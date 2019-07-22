	@if(isset($template_user))
	<ul class="panel">
		<li><a class="nav-header" data-toggle="collapse" data-parent="#accordion" href="#collapse-my-template">My Template</a></li>
		<li id="collapse-my-template" class="boxes left-item panel-collapse collapse">
			@if(count($template_user) > 0)
			@foreach($template_user as $key => $t_u)
			<div class="item-user" value="{{ $t_u->id }}" title="{{ $t_u->name }}">
				<span>{{ $t_u->name }}</span>
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
	<hr>
	@endif