<div class="title">
	<i class="fa fa-caret-down"></i>Typography
</div>
<div class="properties">
	<div class="content assignable font-family-size">
		<select class="base-text-item" name="font-family" title="font-family" placeholder="Font family">
			<option value="unset" style="font-family: unset;">Unset</option>
			<option value="Arial" style="font-family: Arial;">Arial</option>
			<option value="Helvetica" style="font-family: Helvetica;">Helvetica</option>
			<option value="Times New Roman" style="font-family: &quot;Times New Roman&quot;;">Times New Roman</option>
			<option value="Courier New" style="font-family: &quot;Courier New&quot;;">Courier New</option>
			<option value="Verdana" style="font-family: Verdana;">Verdana</option>
			<option value="Georgia" style="font-family: Georgia;">Georgia</option>
			<option value="Tahoma" style="font-family: Tahoma;">Tahoma</option>
			<option value="Calibri" style="font-family: Calibri;">Calibri</option>
			<option value="Garamond" style="font-family: Garamond;">Garamond</option>
			<option value="Bookman" style="font-family: Bookman;">Bookman</option>
			<option value="Roboto" style="font-family: Roboto;">Roboto</option>
		</select>
		<input class="base-text-item px" type="number" name="font-size" placeholder="auto" value="" title="font-size" min="4" max="72" />
	</div>

	<div class="content property--full">
		<div class="content col40 selectable select-many">
			<div class="base-text-item" data-attr-name="font-weight" data-attr-value="700" title="Bold">
				<i class="fa fa-bold" aria-hidden="true"></i>
			</div>
			<div class="base-text-item" data-attr-name="font-style" data-attr-value="italic" title="Italic">
				<i class="fa fa-italic" aria-hidden="true"></i>
			</div>
		</div>

		<div class="content col60 selectable select-one">
			<div class="base-text-item" data-attr-name="text-decoration" data-attr-value="underline" title="Underline">
				<i class="fa fa-underline" aria-hidden="true"></i>
			</div>
			<div class="base-text-item" data-attr-name="text-decoration" data-attr-value="line-through" title="Strikethrough">
				<i class="fa fa-strikethrough" aria-hidden="true"></i>
			</div>
			<div class="new-line" style="cursor: default;" title="New line">
				⏎ 
			</div>
		</div>
	</div>

	<div class="content selectable select-one property--full">
		<div class="base-text-item" data-attr-name="text-align" data-attr-value="left" title="text-align-left">
			<i class="fa fa-align-left"></i>
		</div>
		<div class="base-text-item" data-attr-name="text-align" data-attr-value="center" title="text-align-center">
			<i class="fa fa-align-center"></i>
		</div>
		<div class="base-text-item" data-attr-name="text-align" data-attr-value="right" title="text-align-right">
			<i class="fa fa-align-right"></i>
		</div>
		<div class="base-text-item" data-attr-name="text-align" data-attr-value="justify" title="text-align-justified">
			<i class="fa fa-align-justify"></i>
		</div>
	</div>

	<div class="content assignable property--full">
		<label title="Line Height">
			<span class="">
				<svg class="svg" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
					<path d="M14 1H0V0h14v1zm0 13H0v-1h14v1z"></path>
					<path d="M3.548 11l2.8-8h1.304l2.8 8h-.954l-.7-2H5.202l-.7 2h-.954zM7 3.862L8.448 8H5.552L7 3.862z" fill-rule="evenodd"></path>
				</svg>
			</span>
			<input class="base-text-item px" type="number" name="line-height" spellcheck="false" value="" placeholder="14" min="0">
		</label>
		<label title="Letter Spacing">
			<span class="">
				<svg class="svg" width="16" height="12" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 12V0h1v12H0zm15 0V0h1v12h-1z"></path>
					<path d="M4.548 10l2.8-8h1.304l2.8 8h-.954l-.7-2H6.202l-.7 2h-.954zM8 2.862L9.448 7H6.552L8 2.862z" fill-rule="evenodd"></path>
				</svg>
			</span>
			<input type="number" name="letter-spacing" spellcheck="false" class="base-text-item px" placeholder="0" min="0">
		</label>
	</div>

	<div class="content assignable color property--full">
		<label title="Color">
			<div id="font-color"><i class="fa fa-font" aria-hidden="true"></i></div>
			<div id="colorpkr-font" class="base-text-item colorpkr" data-attr-name="color">
				<!-- <div></div> -->
			</div>
		</label>
		<label title="Bacground">
			<div id="background-color"><i class="fa fa-buysellads" aria-hidden="true"></i></div>
			<div id="colorpkr-background" class="base-text-item colorpkr" data-attr-name="background">
				<!-- <div></div> -->
			</div>
		</label>
	</div>

	<div class="content selectable select-one property--full">
		<div class="base-text-item" data-attr-name="text-transform" data-attr-value="uppercase" title="Uppercase">
			<span class="svg-container">
				<svg class="svg" width="14" height="8" xmlns="http://www.w3.org/2000/svg">
					<path d="M.049 8l2.8-8h1.303l2.8 8H6l-.7-2H1.702l-.7 2H.05zM3.5.862L4.949 5H2.052L3.501.862zM10.89 8h-2.89V0h2.796c1.672 0 2.454.953 2.454 2.125 0 1.031-.61 1.484-1.297 1.672v.078c.734.047 1.61.734 1.61 2C13.563 7.078 12.781 8 10.89 8zm-1.89-3.64V7h1.921c1.079 0 1.624-.422 1.624-1.125 0-.813-.561-1.516-1.608-1.516H9.001zM9 1v2.516h1.765c.875 0 1.51-.547 1.51-1.391 0-.703-.44-1.125-1.447-1.125H9z" fill-rule="evenodd"></path>
				</svg>
			</span>
		</div>
		<div class="base-text-item" data-attr-name="text-transform" data-attr-value="lowercase" title="Lowercase">
			<span class="svg-container">
				<svg class="svg" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.159 8.14c1.047 0 1.593-.562 1.78-.953h.048V8h.922V4.047c0-1.906-1.453-2.125-2.22-2.125-.905 0-1.937.312-2.405 1.406l.875.313c.203-.438.683-.907 1.562-.907.856 0 1.266.457 1.266 1.235 0 .445-.453.422-1.547.562-1.113.145-2.328.39-2.328 1.766 0 1.172.906 1.844 2.047 1.844zm.14-.828c-.734 0-1.265-.328-1.265-.968 0-.703.64-.922 1.36-1.016.39-.047 1.437-.156 1.593-.344v.844c0 .75-.594 1.484-1.688 1.484zM6.591 8h.89v-.922h.11c.203.328.594 1.047 1.75 1.047 1.5 0 2.547-1.203 2.547-3.11 0-1.89-1.047-3.093-2.562-3.093-1.172 0-1.532.719-1.735 1.031h-.078V0h-.922v8zm.907-3c0-1.344.593-2.25 1.718-2.25 1.172 0 1.75.984 1.75 2.25 0 1.281-.593 2.297-1.75 2.297-1.11 0-1.718-.938-1.718-2.297z"></path>
				</svg>
			</span>
		</div>
		<div class="base-text-item" data-attr-name="text-transform" data-attr-value="capitalize" title="Capitalize">
			<span class="svg-container">
				<svg class="svg" width="14" height="9" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.97 8H8V0h1v2.953h.079l.047-.074c.212-.339.6-.957 1.687-.957 1.516 0 2.563 1.203 2.563 3.094 0 1.906-1.047 3.109-2.547 3.109-1.109 0-1.514-.66-1.724-1.004l-.026-.043h-.11V8zm1.734-5.25c-1.125 0-1.719.906-1.719 2.25 0 1.36.61 2.297 1.719 2.297 1.156 0 1.75-1.016 1.75-2.297 0-1.266-.578-2.25-1.75-2.25zM.049 8l2.8-8h1.303l2.8 8H6l-.7-2H1.702l-.7 2H.05zM3.5.862L4.949 5H2.052L3.501.862z" fill-rule="evenodd"></path>
				</svg>
			</span>
		</div>
	</div>
	<div class="text-center base-text-advance property--full">
		<a href="#md-ckeditor" data-toggle="modal" style="color: #eaeaea;">Advance...</a>
	</div>
</div>