
$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
		$('a[rel="lightbox"]').fluidbox();
	})

});

$("#addCentro").on("click", function (e){
	$("#frmAddCentro").submit();
});

$("#addDesaparecido").on("click", function (e){
	$("#frmDesaparecido").submit();
});

$("#addFallecido").on("click", function (e){
	$("#frmFallecido").submit();
});

$("#addEmpresa").on("click", function (e){
	$("#frmEmpresa").submit();
});

$("#addNoticia").on("click", function (e){
	$("#frmNoticia").submit();
});

$("#addVoluntario").on("click", function (e){
	$("#frmVoluntario").submit();
});