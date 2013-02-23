<h1>Edit Vehicle</h1>

<?= $this->form->create($vehicle) ?>
	<h2><?= $vehicle->vin ?></h2>
  <h2><?=  $vehicle->badge ?></h2>
  <?= $this->form->checkbox('allow_sightings', array('checked' => '1')) ?>
  <?= $this->form->text('notes', array('rows' => '3')) ?>
  <?= $this->form->hidden('id') ?>
	<?= $this->form->submit('Save') ?>
	
<div id="dropbox">
	<span>Drop images here to upload.</span>
</div>


<?= $this->form->end() ?>

<?php $this->scripts($this->html->script('dragndrop.js') ) ?>
