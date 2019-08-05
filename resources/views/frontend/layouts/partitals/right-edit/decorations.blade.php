<div class="title" data-sector-title="">
	<i id="caret" class="fa fa-caret-right"></i>Decorations
</div>
<div class="properties" style="display: none;">
	<div id="opacity" class="property slider property__opacity">
		<div class="label ">

			<span class="icon " title="">
				Opacity
			</span>
			<b class="clear" data-clear-style="" style="display: none;">⨯</b>

		</div>
		<div class="fields">

			<div class="field field-range">
				<input type="range" value="1" min="0" max="1" step="0.01">
			</div>

			<div class="field field-integer">
				<span class="input-holder">
					<input type="number" placeholder="1" value="1" style="padding-right: 15px;">
				</span>
				<div class="field-arrows" data-arrows="">
					<div class="field-arrow-u" data-arrow-up=""></div>
					<div class="field-arrow-d" data-arrow-down=""></div>
				</div>
			</div>
		</div>
	</div>
	<div id="background-color" class="property color property__background-color">
		<div class="label">

			<span class="icon " title="">
				Background color
			</span>
			<b class="clear" data-clear-style="" style="display: none;">⨯</b>

		</div>
		<div class="fields">

			<div class="field field-color">
				<div class="input-holder">
					<input type="text" placeholder="none">
				</div>
				<div id="colorpkr-background" class="field-color-picker base-text-item colorpkr" data-attr-name="background-color">
					<!-- <div></div> -->
				</div>
			</div>
		</div>
	</div>
	<div id="border-radius" class="property composite property__border-radius  properties--group" >
		<div class="label">

			<span class="icon " title="">
				Border radius
			</span>
			<b class="clear" data-clear-style="" style="display: none;">⨯</b>

		</div>
		<div class="fields">
			<div class="field composite">
				<span id="input-holder">
					<div class="properties">
						<div id="border-top-left-radius" class="property integer property__border-top-left-radius" >
							<div class="label">

								<span class="icon " title="">
									Top
								</span>


							</div>
							<div class="fields">

								<div class="field field-integer">
									<span class="input-holder">
										<input type="number" placeholder="0">
									</span>
									<span class="field-units"><select class="input-unit"><option selected="true">px</option><option>%</option></select></span>
									<div class="field-arrows" data-arrows="">
										<div class="field-arrow-u" data-arrow-up=""></div>
										<div class="field-arrow-d" data-arrow-down=""></div>
									</div>
								</div>
							</div>
						</div>
						<div id="border-top-right-radius" class="property integer property__border-top-right-radius" >
							<div class="label">
								<span class="icon " title="">
									Right
								</span>
							</div>
							<div class="fields">
								<div class="field field-integer">
									<span class="input-holder">
										<input type="number" placeholder="0">
									</span>
									<span class="field-units"><select class="input-unit"><option selected="true">px</option><option>%</option></select></span>
									<div class="field-arrows" data-arrows="">
										<div class="field-arrow-u" data-arrow-up=""></div>
										<div class="field-arrow-d" data-arrow-down=""></div>
									</div>
								</div>
							</div>
						</div>
						<div id="border-bottom-left-radius" class="property integer property__border-bottom-left-radius" >
							<div class="label">
								<span class="icon " title="">
									Bottom
								</span>
							</div>
							<div class="fields">
								<div class="field field-integer">
									<span class="input-holder">
										<input type="number" placeholder="0">
									</span>
									<span class="field-units"><select class="input-unit"><option selected="true">px</option><option>%</option></select></span>
									<div class="field-arrows" data-arrows="">
										<div class="field-arrow-u" data-arrow-up=""></div>
										<div class="field-arrow-d" data-arrow-down=""></div>
									</div>
								</div>
							</div>
						</div>
						<div id="border-bottom-right-radius" class="property integer property__border-bottom-right-radius" >
							<div class="label">
								<span class="icon " title="">
									Left
								</span>
							</div>
							<div class="fields">
								<div class="field field-integer">
									<span class="input-holder">
										<input type="number" placeholder="0">
									</span>
									<span class="field-units">
										<select class="input-unit">
											<option selected="true">px</option>
											<option>%</option>
										</select>
									</span>
									<div class="field-arrows" data-arrows="">
										<div class="field-arrow-u" data-arrow-up=""></div>
										<div class="field-arrow-d" data-arrow-down=""></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</span>
			</div>
		</div>
	</div>

	<div id="border" class="property composite property__border properties--group">
		<div class="label color-warn">
			<span class="icon " title="">
				Border
			</span>
			<b class="clear" data-clear-style="" style="display: none;">⨯</b>

		</div>
		<div class="fields">
			<div class="field composite">
				<span id="input-holder">
					<div class="properties">
						<div id="border-width" class="property integer property__border-width" >
							<div class="label">
								<span class="icon " title="">
									Width
								</span>
							</div>
							<div class="fields">

								<div class="field field-integer">
									<span class="input-holder"><input type="number" placeholder="medium"></span>
									<span class="field-units"><select class="input-unit"><option selected="true">px</option><option>em</option></select></span>
									<div class="field-arrows" data-arrows="">
										<div class="field-arrow-u" data-arrow-up=""></div>
										<div class="field-arrow-d" data-arrow-down=""></div>
									</div>
								</div>
							</div>
						</div>
						<div id="border-style" class="property select property__border-style" >
							<div class="label">
								<span class="icon undefined" title="undefined">
									Style
								</span>
							</div>
							<div class="fields">
								<div class="field select">
									<span class="input-holder">
										<select name="border-style">
											<option value="none">none</option>
											<option value="solid">solid</option>
											<option value="dotted">dotted</option>
											<option value="dashed">dashed</option>
											<option value="double">double</option>
											<option value="groove">groove</option>
											<option value="ridge">ridge</option>
											<option value="inset">inset</option>
											<option value="outset">outset</option>
										</select>
									</span>
									<div class="sel-arrow">
										<div class="d-s-arrow"></div>
									</div>
								</div>
							</div>
						</div>
						<div id="border-color" class="property color property__border-color" >
							<div class="label color-warn">
								<span class="icon " title="">
									Color
								</span>
							</div>
							<div class="fields">

								<div class="field field-color">
									<div class="input-holder"><input type="text" placeholder="auto"></div>
									<div id="colorpkr-border" class="field-color-picker base-text-item" data-attr-name="border-color">
										<!-- <div></div> -->
									</div>
								</div>

							</div>
						</div>
					</div>
				</span>
			</div>
		</div>
	</div>

	<div id="box-shadow" class="property stack property__box-shadow properties--group" style="display: block;">
		<div class="label four-color">
			<span class="icon " title="">
				Box shadow
			</span>
			<b class="clear" data-clear-style="" style="display: none;">⨯</b>
		</div>
		<div class="fields">
			<div class="field composite">
				<div class="properties">
					<div id="box-shadow-h" class="property integer property__box-shadow-h">
						<div class="label">
							<span class="icon " title="">
								X position
							</span>
						</div>
						<div class="fields">
							<div class="field field-integer">
								<span class="input-holder"><input type="number" placeholder=""></span>
								<span class="field-units">
									<select class="input-unit">
										<option selected="">px</option>
										<option>%</option>
									</select>
								</span>
								<div class="field-arrows" data-arrows="">
									<div class="field-arrow-u" data-arrow-up=""></div>
									<div class="field-arrow-d" data-arrow-down=""></div>
								</div>
							</div>
						</div>
					</div>
					<div id="box-shadow-v" class="property integer property__box-shadow-v">
						<div class="label">
							<span class="icon " title="">
								Y position
							</span>
						</div>
						<div class="fields">
							<div class="field field-integer">
								<span class="input-holder"><input type="number" placeholder=""></span>
								<span class="field-units">
									<select class="input-unit">
										<option selected="">px</option>
										<option>%</option>
									</select>
								</span>
								<div class="field-arrows" data-arrows="">
									<div class="field-arrow-u" data-arrow-up=""></div>
									<div class="field-arrow-d" data-arrow-down=""></div>
								</div>
							</div>
						</div>
					</div>
					<div id="box-shadow-blur" class="property integer property__box-shadow-blur">
						<div class="label">
							<span class="icon " title="">
								Blur
							</span>
						</div>
						<div class="fields">
							<div class="field field-integer">
								<span class="input-holder"><input type="number" placeholder="5px"></span>
								<span class="field-units">
									<select class="input-unit">
										<option selected="">px</option>
									</select>
								</span>
								<div class="field-arrows" data-arrows="">
									<div class="field-arrow-u" data-arrow-up=""></div>
									<div class="field-arrow-d" data-arrow-down=""></div>
								</div>
							</div>
						</div>
					</div>
					<div id="box-shadow-spread" class="property integer property__box-shadow-spread">
						<div class="label">
							<span class="icon " title="">
								Spread
							</span>
						</div>
						<div class="fields">
							<div class="field field-integer">
								<span class="input-holder"><input type="number" placeholder=""></span>
								<span class="field-units">
									<select class="input-unit">
										<option selected="">px</option>
									</select>
								</span>
								<div class="field-arrows" data-arrows="">
									<div class="field-arrow-u" data-arrow-up=""></div>
									<div class="field-arrow-d" data-arrow-down=""></div>
								</div>
							</div>
						</div>
					</div>
					<div id="box-shadow-color" class="property color property__box-shadow-color">
						<div class="label">
							<span class="icon " title="">
								Color
							</span>
						</div>
						<div class="fields">
							<div class="field field-color">
								<div class="input-holder"><input type="text" placeholder="none"></div>
								<div id="colorpkr-boxshadow" class="field-color-picker base-text-item" data-attr-name="box-shadow-color">
									<!-- <div></div> -->
								</div>
							</div>
						</div>
					</div>
					<div id="box-shadow-type" class="property select property__box-shadow-type">
						<div class="label">
							<span class="icon undefined" title="undefined">
								Shadow type
							</span>
						</div>
						<div class="fields">
							<div class="field select">
								<span class="input-holder">
									<select>
										<option value="">Outside</option>
										<option value="inset">Inside</option>
									</select>
								</span>
								<div class="sel-arrow">
									<div class="d-s-arrow"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="background" class="property stack property__background" style="display: block;">
		<div class="label four-color">
			<span class="icon " title="">
				Background Image
			</span>
			<b class="clear" data-clear-style="" style="display: none;">⨯</b>
		</div>
		<div class="fields">
			<div class="field stack">
				<div class="properties">
					<div id="background-image" class="property file property__background-image">
						<div class="label">
							<span class="icon " title="">
								Image
							</span>
						</div>
						<div class="fields">
							<div class="field file">
								<button class="btn btn-xs" style="color: #111;">Chose Image</button>
							</div>
						</div>
					</div>
					<div id="background-repeat" class="property select property__background-repeat">
						<div class="label">
							<span class="icon undefined" title="undefined">
								Repeat
							</span>
						</div>
						<div class="fields">
							<div class="field select">
								<span id="input-holder">
									<select>
										<option value="repeat">repeat</option>
										<option value="repeat-x">repeat-x</option>
										<option value="repeat-y">repeat-y</option>
										<option value="no-repeat">no-repeat</option>
									</select>
								</span>
								<div class="sel-arrow">
									<div class="d-s-arrow"></div>
								</div>
							</div>
						</div>
					</div>
					<div id="background-position" class="property select property__background-position">
						<div class="label">
							<span class="icon undefined" title="undefined">
								Position
							</span>
						</div>
						<div class="fields">
							<div class="field select">
								<span id="input-holder">
									<select>
										<option value="left top">left top</option>
										<option value="left center">left center</option>
										<option value="left bottom">left bottom</option>
										<option value="right top">right top</option>
										<option value="right center">right center</option>
										<option value="right bottom">right bottom</option>
										<option value="center top">center top</option>
										<option value="center center">center center</option>
										<option value="center bottom">center bottom</option>
									</select>
								</span>
								<div class="sel-arrow">
									<div class="d-s-arrow"></div>
								</div>
							</div>
						</div>
					</div>
					<div id="background-attachment" class="property select property__background-attachment">
						<div class="label">
							<span class="icon undefined" title="undefined">
								Attachment
							</span>
						</div>
						<div class="fields">
							<div class="field select">
								<span id="input-holder">
									<select>
										<option value="scroll">scroll</option>
										<option value="fixed">fixed</option>
										<option value="local">local</option>
									</select>
								</span>
								<div class="sel-arrow">
									<div class="d-s-arrow"></div>
								</div>
							</div>
						</div>
					</div>
					<div id="background-size" class="property select property__background-size">
						<div class="label">
							<span class="icon undefined" title="undefined">
								Size
							</span>
						</div>
						<div class="fields">
							<div class="field select">
								<span id="input-holder">
									<select>
										<option value="auto">auto</option>
										<option value="cover">cover</option>
										<option value="contain">contain</option>
									</select>
								</span>
								<div class="sel-arrow">
									<div class="d-s-arrow"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="background-gradient" class="property composite property__background-gradient properties--group">
		<div class="label color-warn">
			<span class="icon " title="">
				Background gradient
			</span>
			<b class="clear" data-clear-style="" style="display: none;">⨯</b>

		</div>
		<div class="fields">
			<div class="field composite">
				<span id="input-holder">
					<div class="properties">
						<div id="background-gradient_type" class="property select property__background-gradient_type" >
							<div class="label">
								<span class="icon" title="">
									Style
								</span>
							</div>
							<div class="fields">
								<div class="field select">
									<span class="input-holder">
										<select name="">
											<option value="linear-gradient">linear-gradient</option>
											<option value="radial-gradient">radial-gradient</option>
											<option value="repeating-linear-gradient">repeating-linear-gradient</option>
											<option value="repeating-radial-gradient">repeating-radial-gradient</option>
										</select>
									</span>
									<div class="sel-arrow">
										<div class="d-s-arrow"></div>
									</div>
								</div>
							</div>
						</div>
						<div id="background-gradient_direction" class="property select property__background-gradient_type">
							<div class="label">
								<span class="icon" title="">
									Direction
								</span>
							</div>
							<div class="fields">
								<div class="field select">
									<span class="input-holder">
										<select name="">
											<option value="">default</option>
											<option value="to left">to left</option>
											<option value="to right">to right</option>
											<option value="to top">to top</option>
										</select>
									</span>
									<div class="sel-arrow">
										<div class="d-s-arrow"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="property color property__background-gradient-color1" >
							<div class="label color-warn">
								<span class="icon " title="">
									Color 1
								</span>
							</div>
							<div class="fields">

								<div class="field field-color">
									<div class="input-holder"><input type="text"></div>
									<div id="colorpkr-border" class="field-color-picker base-text-item" data-attr-name="border-color">
										<!-- <div></div> -->
									</div>
								</div>

							</div>
						</div>

						<div class="property color property__background-gradient-color2" >
							<div class="label color-warn">
								<span class="icon " title="">
									Color 2
								</span>
							</div>
							<div class="fields">

								<div class="field field-color">
									<div class="input-holder"><input type="text"></div>
									<div id="colorpkr-border" class="field-color-picker base-text-item" data-attr-name="border-color">
										<!-- <div></div> -->
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="" id="add-color" title="add color">+</button>
				</span>
			</div>
		</div>
	</div>

</div>