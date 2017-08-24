$(document).ready(function() {
	update();
	getValue();
	clearVal();
	deleteOne();
});

function update() {
	$(".btn").on("click", function() {
		//get display span to change output content
		var display = document.getElementById("display");
		//get length of digits in output
		var length = display.innerHTML.length;
		//if calculator has zero in output, change it to the button that was clicked
		if(display.innerHTML == 0) {
			display.textContent = $(this).attr('value');
			//won't let you type in too many numbers
		} else if(length < 12) {
			display.append($(this).attr('value'));
		}
	});
}

function getValue () {
	var number;
	$("#equals").on("click", function() {
		//capture data from output and log it in console
		var display = document.getElementById("display");
		//when user clicks equals take all of the text before the equal sign
		var equalsLoc = display.textContent.indexOf('=');
		//and store it in a variable
		var str = display.textContent.slice(0, equalsLoc);
		//evaluate string
		display.textContent = eval(str);
		});
}
function clearVal() {
	$("#clearAll").on("click", function () {
		var display = document.getElementById("display");
		display.textContent = 0;
	});
}
function deleteOne() {
	$("#backOne").on("click", function() {
		var display = document.getElementById("display");
		var newDisplay = display.textContent.slice(0, -1);
		if (display.textContent.length > 1) {
			display.textContent = newDisplay;
		}else {
			document.getElementById("display").textContent = 0;
		}
		
	});
}


	
	
	

