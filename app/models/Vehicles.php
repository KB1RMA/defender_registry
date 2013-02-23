<?php

namespace app\models;

class Vehicles extends \lithium\data\Model {
	
	/**
	 * Abstracted models for Year, Model, and Color so 
	 * we can easily extend these later if we need to.
	 *
	 * Example: The color model contains the paint code for those colors
	 */
	
	public $belongsTo = array( 
		'Years' => array(
			'to' => 'Years',
			'key' => 'year_id'
		),
		'VehicleModels'	=> array(
			'to' => 'VehicleModels',
			'key' => 'model_id'
		),
		'Colors' => array(
			'to' => 'Colors',
			'key' => 'color_id'
		)
	);
	
		 
	public $hasMany = array( 'Images', 'Sightings');
	
}
