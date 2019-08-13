$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var food = $("input#food").val();
    var drink = $("input#drink").val();
    var band = $("input#band").val();
    var team = $("input#team").val();
    var travel = $("input#travel").val();

    var favorite = [food, drink, band, team, travel];

	$(".mythings").append("<li>" + favorite[0] + "</li>");
	$(".mythings").append("<li>" + favorite[1] + "</li>");
	$(".mythings").append("<li>" + favorite[2] + "</li>");
	$(".mythings").append("<li>" + favorite[3] + "</li>");
	$(".mythings").append("<li>" + favorite[4] + "</li>");
	$("#list").show();

	event.preventDefault();
	});
});