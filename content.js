$( document ).ready(function() {
    $('#landingTitle').html(homeData.landingTitle);
    $('#landingSubtitle').html(homeData.landingSubtitle);
    $('#aboutSub').html(homeData.aboutText);
    $('#licenseNum').html(homeData.licenseNum);

	var servicesHtml = "";
	for(index in servicesData.services)
	{
		var serviceInfo = servicesData.services[index];
	    var serviceString = ""+
                "<div class=\"col-md-4\">"+
                    "<span class=\"fa-stack fa-4x\">"+
                        "<i class=\"fa fa-circle fa-stack-2x text-primary\"></i>"+
                        //"<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"+
                    	"<img src=\""+serviceInfo.img+"\" class=\"fa fa-circle fa-stack-1x img-circle\" alt=\"\">"+
                    "</span>"+
                    //"<img src=\""+serviceInfo.img+"\" class=\"img-responsive img-circle\" alt=\"\">"+
                	"<div class=\"portfolio-caption\">"+
                        "<h4>"+serviceInfo.name+"</h4>"+
                        "<h3 class=\"section-subheading text-muted\">"+serviceInfo.description+"</h3>"+
                    "</div>"+
                "</div>";
		servicesHtml = servicesHtml.concat(serviceString);
	}
    //"<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"

    $("#servicesDiv").html(servicesHtml);

	var portfolioHtml = "";
	for(index in projectData.projects)
	{
		var portfolioInfo = projectData.projects[index];
	    var portfolioString = ""+
                "<div class=\"col-md-4 col-sm-6 portfolio-item\">"+
                    "<a href=\"gallery.html?project="+portfolioInfo.id+"\" class=\"portfolio-link\" data-project=\""+portfolioInfo.id+"\">"+
                        "<div class=\"portfolio-hover\">"+
                            "<div class=\"portfolio-hover-content\">"+
                                "<i class=\"fa fa-search fa-3x\"></i>"+
                            "</div>"+
                        "</div>"+
                        "<img src=\""+portfolioInfo.after+"\" class=\"img-responsive\" alt=\"\">"+
                    "</a>"+
                    "<div class=\"portfolio-caption\">"+
                        "<h4>"+portfolioInfo.name+"</h4>"+
                        "<h5 class=\"section-subheading text-muted\">"+portfolioInfo.description+"</h5>"+
                    "</div>"+
                "</div>";
		portfolioHtml = portfolioHtml.concat(portfolioString);
	}

    $("#portfolioDiv").html(portfolioHtml);
});

$('#portfolioModal3').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var projectId = button.data('project') // Extract info from data-* attributes

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
			var imageUrl = projectInfo.gallery[index];
			var carouselString = ""+
			"<div class=\"item\">"+
            	"<img src=\""+imageUrl+"\" alt=\"...\">"+
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
});