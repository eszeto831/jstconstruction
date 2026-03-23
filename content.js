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
                "<div class=\"col-md-4 col-sm-6\">"+
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

	var energyHtml = "";
	for(index in energyData.services)
	{
		var energyInfo = energyData.services[index];
	    var energyString = ""+
                "<div class=\"col-md-4 col-sm-6\">"+
                    "<span class=\"fa-stack fa-4x\">"+
                        "<i class=\"fa fa-circle fa-stack-2x text-primary\"></i>"+
                        //"<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"+
                    	"<img src=\""+energyInfo.img+"\" class=\"fa fa-circle fa-stack-1x img-circle\" alt=\"\">"+
                    "</span>"+
                    //"<img src=\""+serviceInfo.img+"\" class=\"img-responsive img-circle\" alt=\"\">"+
                	"<div class=\"portfolio-caption\">"+
                        "<h4>"+energyInfo.name+"</h4>"+
                        "<h3 class=\"section-subheading text-muted\">"+energyInfo.description+"</h3>"+
                    "</div>"+
                "</div>";
		energyHtml = energyHtml.concat(energyString);
	}
    //"<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"

    $("#energyDiv").html(energyHtml);

	var automationHtml = "";
	for(index in automationData.services)
	{
		var automationInfo = automationData.services[index];
	    var automationString = ""+
                "<div class=\"col-md-4 col-sm-6\">"+
                    "<span class=\"fa-stack fa-4x\">"+
                        "<i class=\"fa fa-circle fa-stack-2x text-primary\"></i>"+
                        //"<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"+
                    	"<img src=\""+automationInfo.img+"\" class=\"fa fa-circle fa-stack-1x img-circle\" alt=\"\">"+
                    "</span>"+
                    //"<img src=\""+serviceInfo.img+"\" class=\"img-responsive img-circle\" alt=\"\">"+
                	"<div class=\"portfolio-caption\">"+
                        "<h4>"+automationInfo.name+"</h4>"+
                        "<h3 class=\"section-subheading text-muted\">"+automationInfo.description+"</h3>"+
                    "</div>"+
                "</div>";
		automationHtml = automationHtml.concat(automationString);
	}
    //"<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"

    $("#automationDiv").html(automationHtml);

	var lightingHtml = "";
	for(index in lightingData.services)
	{
		var lightingInfo = lightingData.services[index];
	    var lightingString = ""+
                "<div class=\"col-md-4 col-sm-6\">"+
                    "<span class=\"fa-stack fa-4x\">"+
                        "<i class=\"fa fa-circle fa-stack-2x text-primary\"></i>"+
                        //"<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"+
                    	"<img src=\""+lightingInfo.img+"\" class=\"fa fa-circle fa-stack-1x img-circle\" alt=\"\">"+
                    "</span>"+
                    //"<img src=\""+serviceInfo.img+"\" class=\"img-responsive img-circle\" alt=\"\">"+
                	"<div class=\"portfolio-caption\">"+
                        "<h4>"+lightingInfo.name+"</h4>"+
                        "<h3 class=\"section-subheading text-muted\">"+lightingInfo.description+"</h3>"+
                    "</div>"+
                "</div>";
		lightingHtml = lightingHtml.concat(lightingString);
	}
    //"<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"

    $("#lightingDiv").html(lightingHtml);

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