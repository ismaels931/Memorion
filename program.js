var count = 0;
var ant = {};

function change(id, img) {
	document.getElementById(id).src = img;
	++count;
	if (count == 1) {
		ant.identificador = id;
		ant.imagen = img;
	}
	else if (count == 2 && ant.imagen != img) {
		alert('sigue buscando');
		document.getElementById(ant.identificador).src = 'interrogante.jpg';
		document.getElementById(id).src = 'interrogante.jpg';
		count = 0;
	}
	else if (count == 2 && ant.imagen == img) {
		alert('genial');
		count = 0;
	}
}

function eventos() {
	let pic1 = document.getElementById('pic1');
	pic1.addEventListener('click', function() {change('pic1', 'img1.jpg')});

	let pic2 = document.getElementById('pic2');
	pic2.addEventListener('click', function() {change('pic2', 'img2.jpg')});

	let pic3 = document.getElementById('pic3');
	pic3.addEventListener('click', function() {change('pic3', 'img4.jpg')});

	let pic4 = document.getElementById('pic4');
	pic4.addEventListener('click', function() {change('pic4', 'img7.jpg')});
	
	let pic5 = document.getElementById('pic5');
	pic5.addEventListener('click', function() {change('pic5', 'img8.jpg')});

	let pic6 = document.getElementById('pic6');
	pic6.addEventListener('click', function() {change('pic6', 'img3.jpg')});

	let pic7 = document.getElementById('pic7');
	pic7.addEventListener('click', function() {change('pic7', 'img5.jpg')});

	let pic8 = document.getElementById('pic8');
	pic8.addEventListener('click', function() {change('pic8', 'img6.jpg')});
	
	let pic9 = document.getElementById('pic9');
	pic9.addEventListener('click', function() {change('pic9', 'img1.jpg')});

	let pic10 = document.getElementById('pic10');
	pic10.addEventListener('click', function() {change('pic10', 'img2.jpg')});

	let pic11 = document.getElementById('pic11');
	pic11.addEventListener('click', function() {change('pic11', 'img8.jpg')});

	let pic12 = document.getElementById('pic12');
	pic12.addEventListener('click', function() {change('pic12', 'img5.jpg')});
	
	let pic13 = document.getElementById('pic13');
	pic13.addEventListener('click', function() {change('pic13', 'img4.jpg')});

	let pic14 = document.getElementById('pic14');
	pic14.addEventListener('click', function() {change('pic14', 'img3.jpg')});

	let pic15 = document.getElementById('pic15');
	pic15.addEventListener('click', function() {change('pic15', 'img6.jpg')});

	let pic16 = document.getElementById('pic16');
	pic16.addEventListener('click', function() {change('pic16', 'img7.jpg')});
}
