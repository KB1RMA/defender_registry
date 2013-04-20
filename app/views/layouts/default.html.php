<!doctype html>
<html>
	<head>
		<?= $this->html->charset() ?>

		<title>NAS 110 <?= $this->title() ?></title>

		<?= $this->html->link('Icon', null, array('type' => 'icon')) ?>

		<?= $this->html->style(array('normalize', 'app')) ?>

		<script src="/js/vendor/modernizr-2.6.2.min.js"></script>
	</head>
	<body>
		<!--[if lt IE 7]>
			<p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
		<![endif]-->

		<header>
			<h1>NAS Defender Registry</h1>
		</header>

		<section id="page-content">
			<div class="row main-container">
				<?= $this->content ?>
			</div>
		</section>

		<footer>
			<p><a href="https://github.com/KB1RMA/defender_registry">We're open source!</a></p>
		</footer>

		<?= $this->html->script('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js') ?>
		<?= $this->html->script('/js/plugins.js') ?>
		<?= $this->html->script('/js/foundation/foundation.js') ?>
		<?= $this->html->script('/js/main.js') ?>

		<span id="page-specific-scripts">
		<?= $this->scripts() ?>
		</span>
	</body>
</html>