$(document).ready(function() {

	//This clears the text when the - button is clicked
	$(".clear-text").click(function() {
		$("input").val("");
	});

	//This adds the value to the list section when + pencil is clicked. Then clears the input box.

	$(".add-item").click(function() {
		var new_item = $("input").val();
		//$("#lists li").first().css("color", "red");
		$("#lists ul").prepend('<li> ' + new_item + ' </li>');
		$("input").val("");
	});


	//This adds the value to the list section when + heart is clicked. Then clears the input box.

	$(".add-fave").click(function() {
		var new_item = $("input").val();
		$("#favorites ul").prepend('<li> ' + new_item + ' </li>');
		$("input").val("");
	});

	$("#lists").on("click", "li", function() {
		//alert($(this).text());
		if ($(".fly-button").length) {
			alert("yes");
		}
		else {

			$(this)
			.append(' <input type="button" class="fly-button" value="✓" >' )
			//.button()
			.append(' <input type="button" class="fly-button" value="✘" >' )
			.button();
			
		}

	});




});