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