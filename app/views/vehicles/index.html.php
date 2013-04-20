<ul class="vehicleList large-block-grid-3">
	<?php foreach ( $vehicles as $vehicle ) : ?>
		<li class="vehicle">
			<a href="<?= $this->url(array('Vehicles::view', 'vin' => $vehicle->vin)) ?>" style="background-image: url(<?= $this->path('/img/no-vehicle-image.png') ?>)">
				<div class="vehicleContainer">
					<div class="vin"><?= $vehicle->vin ?></div>
					<div class="badge"><?= $vehicle->badge ?></div>
					<div class="year"><?= $vehicle->year ?></div>
					<div class="color"><?= $vehicle->name ?></div>
				</div>
			</a>
 		</li>
	<?php endforeach; ?>
	<?php unset( $vehicle ); ?>
</ul>
<?=$this->Paginator->paginate();?>