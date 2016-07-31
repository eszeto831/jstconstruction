$( document ).ready(function() {
  console.log("ehehe")
    $('#aboutSub').html(homeData.text);

	var servicesHtml = "";
	for(serviceData in servicesData.services)
	{
		
	    var serviceString = "<div class=&quot;col-md-4&quot;>hllo</div>";

		/*
	    var serviceString = "
            <div class=&quot;col-md-4&quot;>
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