<aside class="main-sidebar">

  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">

    <ul class="sidebar-menu" >
      @if(Auth()->user()->role == 1)
      <li class="{{ Request::segment(1) =='request' ? 'active' : '' }}">
        <a href="{{ route('admin.request') }}">
            <i class="fa fa-link" aria-hidden="true"></i><span>Yêu cầu</span>
        </a>
      </li>
      @endif
      <li class="{{ Request::segment(1) =='template-public' ? 'active' : '' }}">
  			<a href="{{ route('admin.template-public') }}">
  			    <i class="fa fa-link" aria-hidden="true"></i><span>Bản thiết kế công khai</span>
  			</a>
	    </li>
      @if(Auth()->user()->role == 1)
      <li class="{{ Request::segment(1) =='all-template' ? 'active' : '' }}">
        <a href="{{ route('admin.all-template') }}">
            <i class="fa fa-link" aria-hidden="true"></i><span>Xem tất cả Bản thiết kế</span>
        </a>
      </li>

      <li class="{{ Request::segment(1) =='all-user' ? 'active' : '' }}">
        <a href="{{ route('admin.user') }}">
            <i class="fa fa-link" aria-hidden="true"></i><span>Người dùng</span>
        </a>
      </li>
      @endif
      <li class="{{ Request::segment(1) =='my-template' ? 'active' : '' }}">
        <a href="{{ route('admin.my-template') }}">
            <i class="fa fa-link" aria-hidden="true"></i><span>Thiết kế của tôi</span>
        </a>
      </li>

      <li class="{{ Request::segment(1) =='my-category' ? 'active' : '' }}">
        <a href="{{ route('admin.my-category') }}">
            <i class="fa fa-link" aria-hidden="true"></i><span>Danh mục của tôi</span>
        </a>
      </li>

      <li class="{{ Request::segment(1) =='my-tag' ? 'active' : '' }}">
        <a href="{{ route('admin.my-tag') }}">
            <i class="fa fa-link" aria-hidden="true"></i><span>Thẻ Tag của tôi</span>
        </a>
      </li>
    </ul>
    <!-- /.sidebar-menu -->
  </section>
  <!-- /.sidebar -->
</aside>
