<?php

namespace app\controllers;


use app\models\Vehicles;
use app\models\Images;

class VehiclesController extends \lithium\action\Controller {

	public function index() {
		$limit = 21; 
    $page = $this->request->page ?: 1; 
    $order = array('created' => 'DESC'); 
    $total = Vehicles::count(); 
		$with = 'Images';
    $vehicles = Vehicles::all(compact('with','order','limit','page')); // the data to paginate

    return compact('vehicles', 'total', 'page', 'limit');
	}

	public function view() {
		$vin = $this->request->params['vin'];	
		$vehicle = Vehicles::first(array(
			'conditions' => array('vin' => $vin),
			'with' => 'Images'
		));	
		

		return compact('vehicle');
	}

	public function edit() {
		$vin = $this->request->params['vin'];	
		$vehicle = Vehicles::first( array( 
			'conditions' => array('vin' => $vin),
			'with' => 'Images'
		));	

		return compact('vehicle');
	}

}
