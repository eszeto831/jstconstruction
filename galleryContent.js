$(document).ready(function(){  

	var button = $(event.relatedTarget) // Button that triggered the modal
	//var projectId = button.data('project') // Extract info from data-* attributes
	var projectId = QueryString["project"];

 	var projectInfo;
	for(index in projectData.projects)
	{
		var tempProjectInfo = projectData.projects[index];
		if(tempProjectInfo.id == projectId)
		{
			projectInfo = tempProjectInfo;
		}

	}

	var carouselHtml = "";
	var carouselIndicatorHtml = "";
	if(projectInfo != null)
	{
		var modal = $(this)
		for(index in projectInfo.gallery)
		{
			var imageData = projectInfo.gallery[index];
			var carouselString = ""+
			"<div class=\"item\">"+
            	"<img src=\""+imageData.url+"\" alt=\"...\">"+
			    "<div class=\"carousel-caption\">"+imageData.captionText+"</div>"+
            "</div>";
			carouselHtml = carouselHtml.concat(carouselString);

			var carouselIndicatorString = ""+
			"<li data-target=\"#carousel-example-generic\" data-slide-to=\""+index+"\"></li>";
			carouselIndicatorHtml = carouselIndicatorHtml.concat(carouselIndicatorString);

		}

		$(".carousel-inner").html(carouselHtml);
		$(".carousel-indicators").html(carouselIndicatorHtml);

		$('.item').first().addClass('active');
		$('.carousel-indicators > li').first().addClass('active');

		$('#carousel-example-generic').carousel();

    	$("#projectNameModalDiv").html(projectInfo.name);
    	$("#projectDescModalDiv").html(projectInfo.description);
	}

	/*
  for(var i=0 ; i< m.length ; i++) {
    $('<div class="item"><img src="'+m[i]+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
    $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

  }
  $('.item').first().addClass('active');
  $('.carousel-indicators > li').first().addClass('active');
  $('#carousel-example-generic').carousel();
  */
});