$( document ).ready(function() {
    $('#aboutSub').html(homeData.text);

	var servicesHtml = "";
	for(index in servicesData.services)
	{
		var serviceInfo = servicesData.services[index];
	    var serviceString = ""+
            "<div class=\"col-md-4\">"+
                "<span class=\"fa-stack fa-4x\">"+
                    "<i class=\"fa fa-circle fa-stack-2x text-primary\"></i>"+
                    "<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"+
                "</span>"+
                "<h4 class=\"service-heading\">E-Commerce</h4>"+
                "<p class=\"text-muted\">"+serviceInfo.name+"</p>"+
            "</div>";
		servicesHtml = servicesHtml.concat(serviceString);
	}

    $("#servicesDiv").html(servicesHtml);
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
			var carouselString = ""+
			"<div class=\"item\">"+
            	"<img src=\"img/gallery/fullsize/IMG_2814_c_1x1.jpg\" alt=\"...\">"+
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
	}
});