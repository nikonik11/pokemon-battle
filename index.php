<?php
	require './class/Pokemon.php';


$pok1 = new Pokemon('img/escroco.png','escroco',80,20);
$pok2 = new Pokemon('img/dracaufeu.png','dracaufeu',120,40);
$pok3 = new Pokemon('img/machopeur.png','machopeur',110,30);
$pok4 = new Pokemon('img/saquedeneu.png','saquedeneu',70,20);

?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name=viewport content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet"  href="css/style.css">
	<title>Poke-Battle</title>
</head>

<body>

<div class="container-fluid" id="main">

	<div class="row">
		<div id="block1">
			<img src="img/logo.png">
		</div> 
	</div>

	<div class="row">
		<div id="block2">
		<button onClick= "next()" type="button" class="btn btn-warning btn-lg butt" >Jouer</button>
		</div>
	</div>

</div>


<div class="container-fluid" id="select">

	<div class="row">

		<div id="escroco">
			<img class="avatar",
			data-name="<?php echo $pok1->getName()?>" 
			data-life="<?php echo $pok1->getLife()?>"
			data-atak="<?php echo $pok1->getAtak()?>"
			src="<?php echo $pok1->getAvatar();?>">
			<p class="name">nom: <?php echo $pok1->getName()?></p>
			<p class="life">vie: <?php echo $pok1->getLife()?></p>
			<p class="atak">attaque: <?php echo $pok1->getAtak()?></p>
		</div>
	

		<div id="dracaufeu">
			<img class="avatar"
			data-name="<?php echo $pok2->getName()?>" 
			data-life="<?php echo $pok2->getLife()?>"
			data-atak="<?php echo $pok2->getAtak()?>"
			src="<?php echo $pok2->getAvatar();?>">
			<p class="name">nom: <?php echo $pok2->getName()?></p>
			<p class="life">vie: <?php echo $pok2->getLife()?></p>
			<p class="atak">attaque: <?php echo $pok2->getAtak()?></p>
		</div>

		<div id="machopeur">
			<img class="avatar"
			data-name="<?php echo $pok3->getName()?>" 
			data-life="<?php echo $pok3->getLife()?>"
			data-atak="<?php echo $pok3->getAtak()?>"
			src="<?php echo $pok3->getAvatar();?>">
			<p class="name">nom: <?php echo $pok3->getName()?></p>
			<p class="life">vie: <?php echo $pok3->getLife()?></p>
			<p class="atak">attaque: <?php echo $pok3->getAtak()?></p>
		</div>

		<div id="saquedeneu">
			<img class="avatar"
			data-name="<?php echo $pok4->getName()?>" 
			data-life="<?php echo $pok4->getLife()?>"
			data-atak="<?php echo $pok4->getAtak()?>"
			src="<?php echo $pok4->getAvatar();?>">
			<p class="name">nom: <?php echo $pok4->getName()?></p>
			<p class="life">vie: <?php echo $pok4->getLife()?></p>
			<p class="atak">attaque: <?php echo $pok4->getAtak()?></p>
		</div>
	</div>

	<div class="row">
		<p class="choice">Choisissez 2 personnages</p>
	</div>

	<div class="row">
		<div id="valid">
		<button onClick="" type="button" class="btn btn-warning btn-lg butt2" >Valider</button>
		</div>
	</div>
</div>



	<script type ="text/javascript" src="./javascript/app.js"></script>
</body>
</html>