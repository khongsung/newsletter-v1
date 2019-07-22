<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snap Page</title>

     <!-- codemirror -->
    <script src="js/codemirror/codemirror.js"></script>
    <link rel="stylesheet" href="css/codemirror/codemirror.css">
    <script src="js/codemirror/xml.js"></script>
    <script src="js/codemirror/closetag.js"></script>
    <link rel="stylesheet" href="css/codemirror/dracula.css">
    <!-- end codemirror -->

    <!-- highlight js -->
    <link rel="stylesheet" href="{{ asset('css/docco.min.css') }}">
    <script src="{{ asset('js/highlight.min.js') }}"></script>
    <!-- end highlight js -->
    
    <!-- font google -->
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}"/>
    <!-- multiselect -->
    <link href="{{ asset('css/multi-select.css') }}" media="screen" rel="stylesheet" type="text/css">
    
    <!-- index css -->
    <link rel="stylesheet" href="{{ asset( mix('/css/app.css') ) }}">

    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/jquery.validate.min.js') }}"></script>
    <script src="{{ asset('js/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('js/jszip.min.js') }}"></script>
    <script src="{{ asset('js/filesaver.js') }}"></script>
    <script src="{{ asset('frontend_asset/ckeditor/ckeditor.js') }}"></script>
    <script src="{{ asset('js/jquery.multi-select.js')}}" type="text/javascript"></script>

    <!-- index js -->
    <script src="{{ asset(mix('/js/app.js')) }}"></script>
</head><!--/head-->

<body oncontextmenu="return false;">
  @include('frontend.layouts.partitals.header')
	@yield('content')
       
@if(Session::has('errors'))
    <script>
        var errors = "{!! $errors->first('email') ? $errors->first('email') : $errors->first('error_login') !!}";
        console.log(errors);
        $(document).ready(function() {
            $("#modal").modal('show');
            $(".modal-title").html('Login');
            $("#form").attr('action', 'login');
            $("#group").append('<center style="color:red;font-weight:bold;">'+errors+'<center>');
            $.get("frontend_asset/partital-views/login-form.html", function(data){
                $("#group").append(data);
            });
        });
    </script>
@endif   

         
@if(Session::has('clear'))
    <script>
        $(document).ready(function() {
            localStorage.removeItem("object");
        });
    </script>
@endif              
            
    
    
</body>
</html>
