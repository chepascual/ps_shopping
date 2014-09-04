$(document).ready(function() {

	//This clears the text when the - button is clicked
	$(".clear-text").click(function() {
		$("input").val("");
	});

	//This adds the value to the list section when + pencil is clicked. Then clears the input box.

	$(".add-item").click(function() {

		var new_item = $("input").val();

		if (new_item.length > 1) {
			$("#ul_id").prepend('<li >' + new_item + ' </li>');
			$("input").val("");
		}

	});

	$("#item_text").on("keypress", function(e) {

		if (e.keyCode == 13) { 

			var new_item = $("input").val();

			if (new_item.length > 1) {
				$("#ul_id").prepend('<li >' + new_item + ' </li>');
				$("input").val("");
			}

		}

	});


	//This strikes through the list items

	$("#ul_id").click(function(event) {
		event.preventDefault();
		$(event.target).toggleClass('strike');
	});

	//This adds the value to the list section when + heart is clicked. Then clears the input box.

	$(".add-fave").click(function() {

			var new_item = $("input").val();

			if (new_item.length > 1) {
				$("#favorites ul").prepend('<li> <span class="fave_item" >' + new_item + ' </span> <a href="" class="span_check">✎</a></span> </li>');
				$("input").val("");
			}
	});

	$("span_check").click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		alert(event.target);
		$("#ul_id").prepend('<li >' + new_item + ' </li>');

	});


	//This hides all the striked through list items

	$("#trash").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			$(".strike").hide();
	});

});