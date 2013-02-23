<?php 

namespace app\controllers;


use app\models\Images;

class ImagesController extends \lithium\action\Controller {

	public function upload() {

		$error = 0;
		$msg ='';

		if ( $this->request->is('post') ) {

			$data = $this->request->data;
		
			// Make sure we have a vehicleid for model association
			if ( empty($data['vehicleid']) ) {
				$error = 1;
				$msg = 'Please specify a vehicle id!';
			} else {	

				// Make sure there's actually an image
				if ( array_key_exists('image',$data) && !$data['image']['error'] ) {
					$image = Images::create();
					$image->vehicle_id = $data['vehicleid'];
					$image->saveUploaded($data['image']);
					$image->save();
				} else {
					$error = 1;
					$msg = "Can't find the image!";
				}
			}
				
		}

		$this->render(array(
			'type' => 'json',
			'data' => compact('error', 'msg') 
		));	

	}

	public function edit() {

		if ( $this->request->is('post') ) {

		}

	}

}
