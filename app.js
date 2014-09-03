$(document).ready(function() {

	//This clears the text when the - button is clicked
	$(".clear-text").click(function() {
		$("input").val("");
	});

	//This adds the value to the list section when + pencil is clicked. Then clears the input box.

	$(".add-item").click(function() {

		var new_item = $("input").val();

		if (new_item.length > 1) {
			$("#lists ul").prepend('<li> ' + new_item + ' <a href = "#" class = "check-item"> ✓ </a> <a href = "#" class = "x-item"> ✘ </a> </li>');
			//$("#lists ul").prepend('<li> ' + new_item + ' </li>');
			//$("#lists ul").prepend('<li> ' + new_item + ' <input type="button" class="check-item" value="✓" > </li>');
			$("input").val("");
		}
	});

//
	//This adds the value to the list section when + heart is clicked. Then clears the input box.

	$(".add-fave").click(function() {

			var new_item = $("input").val();

			if (new_item.length > 1) {
				$("#favorites ul").prepend('<li> ' + new_item + ' </li>');
				$("input").val("");
			}
	});

	$(".check-item").click(function(e) {
		//alert(e.target);
		alert(e);
	});

	/*

	$("#lists li").on("mouseenter", function() {
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
		.on("mouseleave", function() {
			$("#lists").remove(".fly-button");
		})


	});
*/

});