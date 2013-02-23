<?php

namespace app\models;

class Sightings extends \lithium\data\Model {

	public $belongsTo = array( 
		'Vehicles' 			=> array(
			'to' => 'Vehicles',
			'key' => 'vehicle_id'
		)
	);

}
