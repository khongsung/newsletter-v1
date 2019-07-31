import element from './element/element';

function isGetFileJson() {};

var ele = new element();

isGetFileJson.prototype.getJsonChilds = function() {
	let refer;
	$.ajax({
		url: './frontend_asset/json/refer.json',
		success: (response) => {
			refer = response;
			$.ajax({
				url: './frontend_asset/json/process.php',
				data: {listdata: "listdata"},
				type: "POST",
				success: function(response) {
					getFileName(JSON.parse(response), refer);
					ele.sortableArea();
				},
				error : (response) => {
					console.log("error : ",response);
				}
			});
		}
	});
};

function getFileName(response, refer) {
	$('.left .base-css').empty();
	$.each(response, (k,v) => {
		let color = '#'+Math.random().toString(16).substr(-6);
		if(v != "." && v != "..") {
			let name = detachName(v);
			let icon = '', text = name;
			let classBox = '';
			if(refer[name] != undefined) {
				icon = refer[name]['icon'];
				text = refer[name]['text'];
			}
			if(name == "td") {
				classBox = 'box-td';
			} else if (name == 'tr') {
				classBox = 'box-tr';
			} else {
				classBox = 'box';
			}
			let html = `
			<div class="${classBox}" value="${name}.json">
			<label class="btn drag">${icon + text}</label>
			</div>
			`;
			$('.left .base-css').append(html);
		}
	});
};

function detachName (name) {
	let arr     = name.split('.');
	let tagName = arr[0];
	return tagName;
}

export default isGetFileJson;

