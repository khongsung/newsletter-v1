<!DOCTYPE html>
<html lang="en">
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
    
    <link rel="stylesheet" href="{{ asset('css/filemanager.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}"/>
    
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
    <link href="{{ asset('css/multi-select.css') }}" media="screen" rel="stylesheet" type="text/css">
    <script src="{{ asset('js/jquery.multi-select.js')}}" type="text/javascript"></script>
    <script src="{{ asset('js/highlight.min.js')}}"></script>

    <script src="{{ asset('js/jszip-utils.js')}}"></script>
</head><!--/head-->
<body oncontextmenu="return false;">
    <nav class="header navbar navbar-default" role="navigation">
        <div class="container-fluid">
            <a class="" href="{{ route('frontend.home') }}" onclick="confirmSavePostion()"> <img src="images/logo.png"></a>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <span id="control">
                    <button class="btn btn-basic btn-xs" id="edit" style="display: none;"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</button>
                    <button class="btn btn-basic btn-xs" id="preview"><i class="fa fa-eye" aria-hidden="true"></i> Preview</button>
                    <button class="btn btn-basic btn-xs" id="delete"><i class="fa fa-trash" aria-hidden="true"></i> Delete</button>
                    <button data-toggle="modal" data-target="#modal" class="btn btn-basic btn-xs" ><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</button>
                    <button id="export-file" onclick="exportZip()" class="btn btn-basic btn-xs"><i class="fa fa-download"></i> Export to .Zip</button>

                </span> 
                <span id="controls"></span>
                <span id="name_template"></span>
            </div>
        </div>
    </nav>

    <div class="wrapper">
        <div class="left">
            @include('frontend.layouts.partitals.sidebar')
        </div>
        <div class="content" id="content">
            <div id="sortable-area2" class="group">
                @if(isset($template))
                <script>
                    var w = window;
                    w.object = {
                        "content" : []
                    };
                    $(document).ready(function() {
                        let obj          = <?php echo $template->content; ?>;
                        let categoryId   = <?php echo $template->category_id; ?>;
                        let id           = <?php echo $template->id; ?>;
                        w.object.content = [];
                        $('#sortable-area2').empty();
                        if (localStorage.object != "[]" && categoryId == localStorage.category_id && id == localStorage.id) {
                            console.log('test111');
                            $.each(JSON.parse(localStorage.object), (k,v) => {
                                w.object.content.push(v);
                                // $('#sortable-area2').append(w.objectJson.draw(v));
                            });
                        } else {
                            console.log('test');
                            localStorage.setItem('id', <?php echo $template->id; ?>);
                            localStorage.setItem('category_id', <?php echo $template->category_id; ?>);
                            $.each(obj, (k,v) => {
                                w.object.content.push(v);
                                $('#sortable-area2').append(w.objectJson.draw(v));
                            });
                            w.objectJson.saveLocalStorage();
                        }
                        document.querySelectorAll('pre code').forEach((block) => {
                            hljs.highlightBlock(block);
                        });
                        element.sortableArea();
                        objectJson.drawTreeData();
                    });
                </script>
                @endif
            </div>
        </div>
        <div class="right">
            @include('frontend.layouts.partitals.edit')
        </div>
    </div>
    <div class="modal fade" role="dialog" id="md-html-embed" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog" style="width: 80%;">
            <div class="modal-content">
                <div class="modal-body">
                    <textarea name="editor" id="editor-html-embed" cols="80" rows="50"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" id="editor-confirmOk">Ok</button>
                    <button type="button" class="btn btn-default" data-dismiss='modal' id="editor-confirmCancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    

    {{-- modal file manager --}}
    <div class="modal fade" tabindex="-1" role="dialog" id="modal-filemanager" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">File Manager</div>
                <div class="modal-body">
                    @include('layouts.filemanager')
                </div>
            </div>
        </div>
    </div>


</body>
<script>

</script>
<div class="modal fade" tabindex="-1" role="dialog" id="modal" >
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h3 class="modal-title text-center">Save</h3>
            </div>
            <div class="modal-body">
                @if($action == 'edit')
                <form id="form" name="form" class="form-horizontal" method="POST" action="{{ route('admin.postEditTemplate') }}" onsubmit="addContent()">
                    @else
                    <form id="form" name="form" class="form-horizontal" method="POST" action="{{ route('admin.all-template.postAddTemplate') }}" onsubmit="addContent()">
                        @endif
                        {{ csrf_field() }}
                        <div id="group">
                            <div class="form-group">
                                <div class="control-group form-group">
                                    <input class="decorative-input inspectletIgnore form-control" value="{{ $template->id }}" id="id" placeholder="" name="id"  style="display: none;">
                                </div>
                                <div class="control-group form-group">
                                    <input class="decorative-input inspectletIgnore form-control" value="" id="content" placeholder=""  name="content" style="display: none;">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label col-md-3" for="pwd">Template's Name: </label>
                                <div class="col-md-9">          
                                   <input class="decorative-input inspectletIgnore form-control" placeholder="Name of layout" name="name" value="{{ $template->name }}" type="text">
                               </div>
                           </div>
                           <div class="form-group">
                            <label class="control-label col-md-3" for="pwd">Select Category: </label>
                            <div class="col-md-9"> 
                               <select name="category" required="true" class="form-control" id="category">         
                                 <option value="">Select Category</option>
                                 @foreach($category as $cate)
                                 <option value="{{$cate->id}}" {{ ($template->category_id == $cate->id) ? 'selected' : '' }}>{{ $cate->name }}</option>
                                 @endforeach
                             </select>
                         </div>
                     </div>

                     <div class="form-group">
                        <label class="control-label col-md-3" for="pwd">Select Tag(s): </label>
                        <div class="col-md-9" style="display: flex; justify-content: center;">          
                            <select id='custom-headers' multiple='multiple' name="tag[]" required="true">
                                @foreach($tag as $t)
                                @foreach($template->Tag as $ta)
                                <option value="{{$t->id}}" {{ ($ta->id == $t->id) ? 'selected' : '' }}>{{ $t->name }}</option>
                                @endforeach
                                @endforeach
                            </select>
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
                    <!-- <input class="btn btn-success btn-block btn-large" id="save_layout" type="submit" value="Save as My Layout"> -->
                    <input class="btn btn-success btn-block btn-large" type="submit" value="Save as My Template">
                    <a href="javascript:void(0);" onclick="exportZip()" class="btn btn-success btn-block btn-large">Export to .Zip File(HTML, CSS, JS)</a>
                    <script>
                     $(document).ready(function() {
                                   //validate
                                   jQuery.validator.addMethod("nameCategoryRegex", function(value, element) {
                                    return this.optional(element) || /^[a-z\ \s]+$/i.test(value);
                                    }, "Category's name must contain only letters & space");
                                       jQuery.validator.addMethod("nameTagRegex", function(value, element) {
                                        return this.optional(element) || /^[a-z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/i.test(value);
                                    }, "Tag's name must contain only letters & number. No space allowed");
                                       $("#form").validate({
                                        onfocusout: false,
                                        onkeyup: false,
                                        onclick: false,
                                        rules: {
                                            "name": {
                                                required: true
                                            },
                                            "category" : {
                                                required: true
                                            },
                                            "tag[]" : {
                                                required: true
                                            },
                                        },
                                        messages: {
                                            "name": {
                                                required: "This field is required!"
                                            },
                                            "category" : {
                                                required: "Please select an item!",
                                            },
                                            "tag[]" : {
                                                required: "Please select an item!",
                                            }
                                        }
                                    });
                               });      
                           </script>
                       </div>
                   </form>
               </div>
           </div>
       </div>
   </div>


    <!-- index js -->
    <script src="{{ asset(mix('/js/app.js')) }}"></script>
    <script src="{{ asset('js/filemanager.js') }}"></script>
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>

</html>