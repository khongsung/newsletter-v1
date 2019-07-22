<?php 

	// list field in data folder
	if($_POST['listdata']) {
		$list = scandir("childs");
		echo json_encode($list);
	}

 ?>