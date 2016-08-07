$( document ).ready(function() {
  console.log("ehehe")
    $('#aboutSub').html(homeData.text);

	var servicesHtml = "";
	for(serviceData in servicesData.services)
	{
	    var serviceString = ""+
            "<div class=\"col-md-4\">"+
                "<span class=\"fa-stack fa-4x\">"+
                    "<i class=\"fa fa-circle fa-stack-2x text-primary\"></i>"+
                    "<i class=\"fa fa-shopping-cart fa-stack-1x fa-inverse\"></i>"+
                "</span>"+
                "<h4 class=\"service-heading\">E-Commerce</h4>"+
                "<p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>"+
            "</div>";
		
	    //var serviceString = "<div class=&quot;col-md-4&quot;>hllo</div>";
/*
	    var serviceString = ""+
            "<div class=&quot;col-md-4&quot;>"+
                "<span class=&quot;fa-stack fa-4x&quot;>"+
                    "<i class=&quot;fa fa-circle fa-stack-2x text-primary&quot;></i>"+
                    "<i class=&quot;fa fa-shopping-cart fa-stack-1x fa-inverse&quot;></i>"+
                "</span>"+
                "<h4 class=&quot;service-heading&quot;>E-Commerce</h4>"+
                "<p class=&quot;text-muted&quot;>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>"+
            "</div>";
*/
		/*
	    var serviceString = "
            <div class=&quot;col-md-4&quot;>
                <span class=&quot;fa-stack fa-4x&quot;>
                    <i class=&quot;fa fa-circle fa-stack-2x text-primary&quot;></i>
                    <i class=&quot;fa fa-shopping-cart fa-stack-1x fa-inverse&quot;></i>
                </span>
                <h4 class=&quot;service-heading&quot;>E-Commerce</h4>
                <p class=&quot;text-muted&quot;>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
";
*/
//var serviceString = "test";

		console.log(serviceString);
		servicesHtml = servicesHtml.concat(serviceString);
		console.log(servicesHtml);
	}

	console.log(servicesHtml);

    $("#servicesDiv").html(servicesHtml);
});