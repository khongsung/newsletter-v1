<!-- Main Header -->
<header class="main-header">

  <!-- Logo -->
  <a href="{{ route('admin')}}" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-mini"><b>SP</b></span>
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg"><b>Snap </b>Design</span>
  </a>
  <!-- <a class="" href="{{ route('admin') }}" > <img src="images/logo.png" width="70px"></a> -->

  <!-- Header Navbar -->
  <nav class="navbar navbar-static-top" role="navigation">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    <a href="#modalAddNewCategory" data-toggle="modal" class="btn btn-success btn-xs add-category" style="margin-top: 14px;"><span ><i class="fa fa-plus-square" ></i> Thêm mới Danh mục</span></a>
    <a href="#modalAddNewTag" data-toggle="modal" class="btn btn-success btn-xs add-tag" style="margin-top: 14px;"><i class="fa fa-plus-square" aria-hidden="true"></i> Thêm mới Tag</a>
    <a href="{{ route('frontend.home') }}" class="btn btn-success btn-xs" style="margin-top: 14px;" onclick="clearLocalStorage()"><span><i class="fa fa-plus-square"></i> Thêm mới Bản thiết kế</span></a>
    <script>
          function clearLocalStorage(){
            localStorage.removeItem("object");
          }
    </script>
    <!-- Navbar Right Menu -->
    <div class="navbar-custom-menu">
        <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        
        @if(Auth()->user()->role ==1)
        <!-- Notifications Menu -->
        <li class="dropdown notifications-menu">
          <!-- Menu toggle button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-bell-o"></i>
            <span class="label label-warning">{{$count_request}}</span>
          </a>
          <ul class="dropdown-menu">
            <li class="header">Bạn có <span style="color: red;">{{$count_request}}</span> thông báo</li>
            <li>
              <!-- Inner Menu: contains the notifications -->
              <ul class="menu">
                <li><!-- start notification -->
                  <a href="#">
                    <i class="fa fa-users text-aqua"></i> <span style="color: red;">{{$count_request}}</span> bản thiết kế của người dùng muốn công khai
                  </a>
                </li>
                <!-- end notification -->
              </ul>
            </li>
            <li class="footer"><a href="{{ route('admin.request') }}">Xem tất cả</a></li>
          </ul>
        </li>
       @endif
        <!-- User Account Menu -->
        <li class="dropdown user user-menu">
          <!-- Menu Toggle Button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <!-- The user image in the navbar-->
            <img src="admin_asset/img/user2-160x160.jpg" class="user-image" alt="User Image">
            <!-- hidden-xs hides the username on small devices so only the image appears. -->
            
            <span class="hidden-xs">Xin chào, {{ Auth::guard('web')->user()->name }}</span>
          </a>
          <ul class="dropdown-menu">
            <!-- The user image in the menu -->
            <li class="user-header">
              <img src="admin_asset/img/user2-160x160.jpg" class="img-circle" alt="User Image">

              <p>
                {{ Auth::guard('web')->user()->name }}
                <small>Khởi tạo: {{ \Carbon\Carbon::parse(Auth::guard('web')->user()->created_at)->format('h:m:i, d/m/Y') }}</small>
              </p>
            </li>
            <!-- Menu Body -->
            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                <a href="#" class="btn btn-default btn-flat"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
              </div>
              <div class="pull-right">
                @if ( Auth::guard('web'))
                <a href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();" class="btn btn-default btn-flat">Sign out <i class="fa fa-sign-out" aria-hidden="true"></i></a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
                @endif
              </div>
            </li>
          </ul>
        </li>

      </ul>
    </div>
     
    </div>
  </nav>
</header>
<div class="modal fade" tabindex="-1" role="dialog" id="modalPreview" >
    <div class="modal-dialog">
  <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h3 class="modal-title text-center">Preview 
        <br>
        <div  style="display: flex; float: right;">
          @if(Auth()->user()->role != 1 && Request::path() == 'template-public')
          @else
          <a href="" class="btn btn-primary preview_id btn-xs" value="" style="float: left;" target="blank"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Sửa</a> 
          <a href="" class="btn btn-default view_id btn-xs" value="" style="float: left; margin-left: 5px;" target="blank" ><i class="fa fa-share-square-o" aria-hidden="true"></i> Xuất link</a> 
          @endif
        <a href="javascript:void(0);" onclick="exportZip()" class="btn btn-success btn-xs" style="margin-left: 5px;"><i class="fa fa-download" aria-hidden="true"></i> Download</a> 
        </div>
      </h3>

      </div>
      <div class="modal-body">
        
      </div>
     </div>
    </div>
</div>


<div class="modal fade" tabindex="-1" role="dialog" id="modalConfirm" >
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title text-center">Save as Public
          </h3>
          </div>
          <div class="modal-body">
            <form action="{{ route('admin.request.publicTemplate') }}" method="post" class="form-horizontal" enctype="multipart/form" id="formPublic">
              {{ csrf_field() }}
              <div class="control-group form-group">
                <input class="decorative-input inspectletIgnore form-control" value="" id="request_id" placeholder="" name="request_id" style="display: none;" value="">
                 <input class="decorative-input inspectletIgnore form-control" value="" id="template_id" placeholder="" name="template_id" style="display: none;" value="">
              </div>
              <div class="form-group">
                <label class="control-label col-md-3" for="pwd">Template's Name: </label>
                  <div class="col-md-9">          
                      <input class="decorative-input inspectletIgnore form-control" placeholder="Name of layout" name="name" type="text" required="true">
                  </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3" for="pwd">Select Category: </label>
                  <div class="col-md-9">          
                      <select name="category" required="true" class="form-control" id="category">
                  <!-- <option value="">--Select a Category--</option> -->
                </select>
                  </div>
              </div>

              <div class="form-group">
                <label class="control-label col-md-3" for="pwd">Select Tag(s): </label>
                  <div class="col-md-9" style="display: flex; justify-content: center;">  
                <select id='custom-headers' multiple='multiple' name="tag[]" required="true">
                </select>
                <div id="message" style="color: red; display: none;">Please select Tag (*)</div>
                  </div>
                  <script>


                    var option_tag='';
                    var array_tag = [];
                    $(document).ready(function() {
                      $.ajax({
                        url: 'get-tag', 
                        type: 'get',   
                      success: function(data){ 
                        for (var i = 0; i < data.length; i++) {
                          $("#custom-headers").multiSelect('addOption', { value: data[i].id, text: data[i].name });
                        }
                      }
                    })
                    });
                    $('#custom-headers').multiSelect({
                      selectableHeader: "<div class='custom-header'>Your Tags</div>",
                      selectionHeader: "<div class='custom-header'>Selected</div>",
                      afterSelect: function(values){
                    },
                    afterDeselect: function(values){

                    }
                  });

                  $('#custom-headers').change(function() {
                      var multipleValues = $( "#custom-headers" ).val();
                      console.log(multipleValues);
                  });
                  </script>
              </div>

                <div class="control-group row-space-2 form-group">
                  
                </div>
                <a href="javascript:void(0);" class="btn btn-xs btn-primary" style="margin-bottom: 5px;" onclick="addCategory()"><i class="fa fa-plus-square" aria-hidden="true"></i> Add new category</a>
                <a href="javascript:void(0);" class="btn btn-xs btn-primary" style="margin-bottom: 5px;" onclick="addTag()"><i class="fa fa-plus-square" aria-hidden="true"></i> Add new tag</a>
                <input class="btn btn-success btn-block btn-large" type="submit" value= "Save">
                <a href="javascript:void(0);" onclick="exportZip()" class="btn btn-success btn-block btn-large"><i class="fa fa-download" aria-hidden="true"></i> Export to .Zip File(HTML, CSS, JS)</a>
              
            </form>
          </div>
      </div>
    </div>
</div>


<div class="modal fade" tabindex="-1" role="dialog" id="modalAddNewCategory" >
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title text-center">Add new Category
          </h3>
          </div>
          <div class="modal-body">
            <form action="{{ route('admin.addCategory') }}" method="post" id="formCategory">
              {{ csrf_field() }}
              <div class="control-group form-group">
                <input class="decorative-input inspectletIgnore form-control" placeholder="Name of Category" name="name" type="text" required="true">
              </div>
              <div class="control-group form-group">
                <input class="decorative-input inspectletIgnore form-control" placeholder="Description" name="description" type="text">
              </div>
              <input class="btn btn-success btn-block btn-large" type="submit" value="Save">
            </form>
          </div>
      </div>
    </div>
</div>



<div class="modal fade" tabindex="-1" role="dialog" id="modalAddNewTag" >
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h3 class="modal-title text-center">Add new Tag
          </h3>
          </div>
          <div class="modal-body">
            <form action="{{ route('admin.addTag') }}" method="post" id="formTag">
              {{ csrf_field() }}
              <div class="control-group form-group">
                <input class="decorative-input inspectletIgnore form-control" placeholder="Tag's Name" name="name" type="text" required="true">
              </div>
              <div class="control-group row-space-2 form-group">
                <input class="decorative-input inspectletIgnore form-control" placeholder="Description" name="description" type="text" value="">
              </div>
              <input class="btn btn-success btn-block " type="submit" value="Save">
            </form>
          </div>
      </div>
    </div>
</div>


<script type="text/javascript">
  $(document).ready(function() {
    var option = '<option value="">--Select a Category--</option>';
    $.ajax({
          url: 'get-category', 
          type: 'get',   
        success: function(data){ 
          for (var i = 0; i < data.length; i++) {
            option += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
          }
            $("#category").html(option);
        }

    })
  });
</script>