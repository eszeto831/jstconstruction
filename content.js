$( document ).ready(function() {
    $('#aboutSub').html(homeData.text);

	var servicesHtml = "";
	for(index in servicesData.services)
	{
		var serviceInfo = servicesData.services[index];
	    var serviceString = ""+
                "<div class=\"col-md-4 col-sm-6 portfolio-item\">"+
                        "<img src=\""+serviceInfo.img+"\" class=\"img-responsive\" alt=\"\">"+
                    "<div class=\"portfolio-caption\">"+
                        "<h4>"+serviceInfo.name+"</h4>"+
                        "<p class=\"text-muted\">"+serviceInfo.description+"</p>"+
                    "</div>"+
                "</div>";
		servicesHtml = servicesHtml.concat(serviceString);
	}

    $("#servicesDiv").html(servicesHtml);

	var portfolioHtml = "";
	for(index in projectData.projects)
	{
		var portfolioInfo = projectData.projects[index];
	    var portfolioString = ""+
                "<div class=\"col-md-4 col-sm-6 portfolio-item\">"+
                    "<a href=\"#portfolioModal3\" class=\"portfolio-link\" data-toggle=\"modal\" data-project=\""+portfolioInfo.id+"\">"+
                        "<div class=\"portfolio-hover\">"+
                            "<div class=\"portfolio-hover-content\">"+
                                "<i class=\"fa fa-plus fa-3x\"></i>"+
                            "</div>"+
                        "</div>"+
                        "<img src=\""+portfolioInfo.after+"\" class=\"img-responsive\" alt=\"\">"+
                    "</a>"+
                    "<div class=\"portfolio-caption\">"+
                        "<h4>"+portfolioInfo.name+"</h4>"+
                        "<p class=\"text-muted\">"+portfolioInfo.description+"</p>"+
                    "</div>"+
                "</div>";
		portfolioHtml = portfolioHtml.concat(portfolioString);
	}

    $("#portfolioDiv").html(portfolioHtml);
});

$('#portfolioModal3').on('show.bs.modal', function (event) {
	console.log("ehehe");
	var button = $(event.relatedTarget) // Button that triggered the modal
	var projectId = button.data('project') // Extract info from data-* attributes

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
			var imageUrl = projectInfo.gallery[index];
			console.log("add string "+imageUrl);
			var carouselString = ""+
			"<div class=\"item\">"+
            	"<img src=\""+imageUrl+"\" alt=\"...\">"+
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
});