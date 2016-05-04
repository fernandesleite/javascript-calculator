// Javascript Calculator using the math.js library
// With keyboard and mouse functionality

$(document).ready(function(){
	var confirmEquals = false; // confirm if equals was pressed

	 // mouse functions

	 // Show the value in the expression box when clicked
	$('.button').on('click', function() {
		// clear the expression bar if the result was already displayed
		if(confirmEquals === true & $(this).hasClass('number')){
			$('#expression').html('');
		}
		confirmEquals = false;

		var value = $(this).attr("value");
		$('#expression').append(value);
	});

	// Show the results and confirm that Equals was pressed
	function result(){
		var x = document.getElementById("expression").innerHTML;
		$('#result').html(math.eval(x));
		confirmEquals = true;
	}

	$('.equals').on('click', result);

	// Clear the display when pressed
	$('#Clear').on('click', function() {
		$('#expression').html('');
		$('.result').html('');
	});

	// Percentage function
	$('#pct').on('click', function(){
		var x = document.getElementById("expression").innerHTML;
		$('#result').html(parseInt(x)/100 + '%');
		confirmEquals = true;
	})

	// +/- function
	$('#plus-minus').on('click', function(){
		var x = document.getElementById("expression").innerHTML;
		$('#expression').html(x * -1);
	})

	// keyboard functions

	// keyboard numbers and operators
	$(document).keypress(function(event){
		var key = event.keyCode
		//console.log(key)
		if (key >= 42 && key <= 57){
			if(confirmEquals === true){
				$('#expression').html('');
		}
			confirmEquals = false;
			var char = String.fromCharCode(key)
			$('#expression').append(char)
			$('.button[value|="' + char + '"').addClass("active")

		}
		else if (key == 13){
			result()
			$('.equals').addClass("active")
		}
	})

	// keyboard clear (use esc or del)
	$(document).keydown(function(event){
		var key = event.keyCode
		//console.log(key)
		if (key == 27 || key == 46){
			$('#expression').html('');
			$('.result').html('');
			$('.clear').addClass("active")
		}
	})

	// remove the active color when the key is relesed
	$(document).keyup(function(event){
		var key = event.keyCode
		$('button').removeClass("active")
	})

	//TODO: ERROR HANDLING
	//mostrar erros pro usuario quando tiver operadores errados,
	//quando passar do número de caracteres limite

});