<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="images/favicon.ico">
        <!-- CSRF Token -->
        <!-- <meta http-equiv="refresh" content="5" > -->
        <title>Snap-Page</title>
        <base href="{{asset('')}}">
        <link rel="shortcut icon" href="favicon.ico"/>
        <!-- jQuery 3 -->
        <script src="js/jquery.min.js"></script>
        <!-- hljs -->
        <script src="js/admin.js"></script>
        <script src="js/highlight.min.js"></script>
        <link rel="stylesheet" href="css/bootstrap-grid.css">
		<link rel="stylesheet" href="css/docco.min.css">
	</head>
	<body>
	<div class="content container" id="content">
            <div id="sortable-area2" class="group">
                @if(isset($template))
                <script>
                    var w = window;
                    w.object = {
                        "tag" : "div",
                        "category" : "grid",
                        "attr" : {
                            "class" : "column",
                            "style" : {}
                        },
                        "content" : []
                    };
                    $(document).ready(function() {
                        let obj = <?php echo $template->content; ?>;
                        $('#sortable-area2').empty();
                        w.object.content = [];
                        w.object['css'] = obj.css;
                        delete obj.css;
                        $.each(obj.content, (k,v) => {
                            w.object.content.push(v);
                        });
                        $('#sortable-area2').append(w.objectJson.draw(w.object));
                        document.querySelectorAll('pre code').forEach((block) => {
                            hljs.highlightBlock(block);
                        });
                    });
                </script>
                @endif
            </div>
        </div>
        <div id="rules-css"></div>
	</body>

</html>