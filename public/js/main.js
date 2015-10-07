
$(document).ready(function() {

	$("body").addClass("loaded");

	$(function () {
		$('a[rel="lightbox"]').fluidbox();
	})

	$('.textarea-noticia').wysihtml5();

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


// When document is ready: this gets fired before body onload <img src="http://blogs.digitss.com/wp-includes/images/smilies/simple-smile.png" alt=":)" class="wp-smiley" style="height: 1em; max-height: 1em;" />
$(document).ready(function(){
	// Write on keyup event of keyword input element
	$("#kwd_search").keyup(function(){
		// When value of the input is not blank
		if( $(this).val() != "")
		{
			// Show only matching TR, hide rest of them
			$("#my-table tbody>tr").hide();
			$("#my-table td:contains-ci('" + $(this).val() + "')").parent("tr").show();
		}
		else
		{
			// When there is no input or clean again, show everything back
			$("#my-table tbody>tr").show();
		}
	});
});
// jQuery expression for case-insensitive filter
$.extend($.expr[":"],
{
    "contains-ci": function(elem, i, match, array)
	{
		return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});
