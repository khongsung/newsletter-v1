<?php 

	// echo "string";
	// print_r($_FILES);
	if($_FILES && $_FILES != null) {
		move_uploaded_file($_FILES['file']['tmp_name'], "./".$_FILES['file']['name']);
		print_r($_FILES);
	}
	
 ?>