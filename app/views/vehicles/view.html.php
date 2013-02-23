<h1><?= $vehicle->vin ?></h1>

<h1><?= $vehicle->badge ?></h1>

<h4>Notes</h4>
<p><?= $vehicle->notes ?></p>

<h4>Images</h4>

<?php if ( !empty($vehicle->images ) ) : ?>
	<ul class="vehicleImages">
	<?php foreach ($vehicle->images as $key=>$image) :?>
		<li>
			<a href="" class="lightbox">
				<img src="<?= $this->url($image->getThumbnail(200, 100)) ?>" title="<?= $image->title ?>" width="200" height="100" />
				<p><?= $image->description ?></p>
			</a>
		</li>
	<?php endforeach; ?>
	</ul>
<?php else : ?>

	<p>No Images</p>

<?php endif; ?>

