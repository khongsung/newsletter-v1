let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// frontend
mix.js('resources/assets/frontend/js/app.js', 'public/js');

mix.copy('resources/assets/frontend/sass/images/', 'public/css/images/', false);

mix.sass('resources/assets/frontend/sass/bootstrap-grid.scss', 'public/css')
 	.sass('resources/assets/frontend/sass/app.scss', 'public/css')
   .options({
      processCssUrls: false
   });


// admin
mix.js('resources/assets/admin/js/admin.js', 'public/js')

mix.sass('resources/assets/admin/sass/admin.scss', 'public/css')
   .options({
      processCssUrls: false
   });


// layouts component
mix.sass('resources/assets/layouts/sass/filemanager.scss', 'public/css');
mix.js('resources/assets/layouts/js/filemanager.js', 'public/js');
