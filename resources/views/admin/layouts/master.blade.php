<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="images/favicon.ico">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- <meta http-equiv="refresh" content="5" > -->
        <title>Snap-Page Admin</title>
        <base href="{{asset('')}}">
        <link rel="shortcut icon" href="favicon.ico"/>
        <!-- jQuery 3 -->
        <script src="js/jquery.min.js"></script>
        <!-- Styles -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="admin_asset/css/AdminLTE.css">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
        <link rel="stylesheet" href="admin_asset/css/skins/_all-skins.min.css">
        <!-- Google Font -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
        <link rel="stylesheet" href="css/admin.css">

        <!-- multiselect -->
    <link href="{{ asset('css/multi-select.css') }}" media="screen" rel="stylesheet" type="text/css">
    <script src="{{ asset('js/jquery.multi-select.js')}}" type="text/javascript"></script>
    <script src="{{ asset('js/highlight.min.js')}}"></script>
     <link rel="stylesheet" href="{{ asset('css/docco.min.css') }}">
     <script src="{{ asset('js/jquery.validate.min.js') }}"></script>
    </head>
    <style>
        .custom-header{
          background: grey;
          text-align:center;
          font-weight:bold;
          color: #fff;
        }
    </style>
    <body class="hold-transition skin-blue sidebar-mini" ng-app="app">
        <div class="wrapper">
            @include('admin.layouts.partitals.header')
            @include('admin.layouts.partitals.leftSide')
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Page Content -->
                @yield('content')
                <!-- /#page-wrapper -->
            </div>
            <!-- /.content-wrapper -->
            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                  <b>Version</b> 1.0.0
                </div>
                <strong>Copyright &copy; 2019 Snap-Page.</strong>
            </footer>
            <div class="control-sidebar-bg"></div>
        </div><!-- ./wrapper -->

        <!-- for export zip -->
        <script src="{{ asset('js/jszip.min.js') }}"></script>
        <script src="{{ asset('js/filesaver.js') }}"></script>
        <!-- Bootstrap 3.3.7 -->
        <script src="js/bootstrap.min.js"></script>

        <script src="js/admin.js"></script>

       
        <!-- AdminLTE App -->
        <script src="admin_asset/js/adminlte.min.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="admin_asset/js/demo.js"></script>

        @if(Session::has('clear'))
            <script>
                $(document).ready(function() {
                    localStorage.removeItem("object");
                });
            </script>
        @endif 
    </body>

</html>
