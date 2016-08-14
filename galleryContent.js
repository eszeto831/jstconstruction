$(document).ready(function(){  

	console.log("ehehe gallery");
	var button = $(event.relatedTarget) // Button that triggered the modal
	//var projectId = button.data('project') // Extract info from data-* attributes
	var projectId = QueryString["project"];
	console.log("finding you: "+projectId);

 	var projectInfo;
	for(index in projectData.projects)
	{
		var tempProjectInfo = projectData.projects[index];
		if(tempProjectInfo.id == projectId)
		{
			projectInfo = tempProjectInfo;
	console.log("found you");
		}

	}

	var carouselHtml = "";
	var carouselIndicatorHtml = "";
	if(projectInfo != null)
	{
	console.log("add you");
		var modal = $(this)
		for(index in projectInfo.gallery)
		{
	console.log("add 1");
			var imageData = projectInfo.gallery[index];
			console.log("add string "+imageData.url);
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

	console.log(carouselHtml);
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