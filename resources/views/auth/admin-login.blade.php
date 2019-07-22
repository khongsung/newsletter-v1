<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="shortcut icon" href="images/favicon.ico">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Snap-Page Admin Login</title>
        <base href="{{asset('')}}">
        <!-- Styles -->
        <!-- Bootstrap 3.3.7 -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="admin_asset/css/ionicons.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="admin_asset/css/AdminLTE.min.css">
        <!-- iCheck -->
        <link rel="stylesheet" href="admin_asset/plugins/iCheck/square/blue.css">
    </head>

   <body class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href=""><b>Snap-Page</b></a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Enter your Email Address and password</p>

        <form class="form-horizontal" method="POST" action="{{ route('admin.login.submit') }}">
            {{ csrf_field() }}
               @if (session('status'))
                        <span class="alert alert-info help-block" role="alert">
                            <strong>{{ session('status') }}</strong>
                        </span>
                    @endif
                     @if (session('error'))
                        <span class="alert alert-danger help-block" role="alert">
                            <strong>{{ session('error') }}</strong>
                        </span>
                    @endif
          <div class="has-feedback form-group">
            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus placeholder="Email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="has-feedback form-group">
            <input id="password" type="password" class="form-control" name="password" required>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
            </div>
            <!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div><br>

            <br>


            <!-- /.col -->
          </div>
        </form>

        <!-- /.social-auth-links -->
      </div>
      <!-- /.login-box-body -->
    </div>
    <!-- /.login-box -->

    <!-- jQuery 3 -->
    <script src="js/jquery.min.js"></script>
    <!-- Bootstrap 3.3.7 -->
    <script src="js/bootstrap.min.js"></script>
    <!-- iCheck -->
    <script src="admin_asset/plugins/iCheck/icheck.min.js"></script>
    <script>
      $(function () {
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' /* optional */
        });
      });
    </script>
    </body>

</html>
