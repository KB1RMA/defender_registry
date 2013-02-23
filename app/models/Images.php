<?php

namespace app\models;

class Images extends \lithium\data\Model {

	public $imagePath = '/vehicle-images';
	public $storagePath = LITHIUM_APP_PATH;
	public $originalPath; 

	public $belongsTo = array(
		'Vehicles' => array(
			'to' => 'Vehicles',
			'key' => 'vehicle_id',
		)
	);

	function __construct() {
		$this->storagePath .= '/webroot';
		$this->originalPath = $this->storagePath . $this->imagePath . '/original';
	}

	public function saveUploaded( $entity, $file) {
		
		if ( move_uploaded_file( $file['tmp_name'], $this->originalPath . '/' . $file['name'] ) ) {
			$entity->file_name = $file['name'];
			$entity->size = $file['size'];
			return true;
		}
	
		return false;
	}
                              
	public function getThumbnail($entity, $width, $height) {

		// Build the thumbnail path using the vehicle's VIN number

		$thumbPath = $this->imagePath . '/' . $entity->id . '_'.$width.'x'.$height.'.jpg';
		$thumbFile = $this->storagePath . $thumbPath;


		// If the thumb has already been generated, just return the url

		if ( file_exists($thumbFile) )
			return $thumbPath;


		// Otherwise we need to build it

		try {
			$imagine = new \Imagine\Gd\Imagine();
			$imagine
				->open($this->originalPath . '/' . $entity->file_name)
				->resize(new \Imagine\Image\Box($width, $height))
				->save($thumbFile);
		} catch ( Exception $e ) {

		}

		return $thumbPath;
	}

}
