<script> 
console.log("Log Order");
fetch('/api/storefront/order/{{checkout.order.id}}', {credentials: 'include'})
.then(function(response) {
return response.json();
})
.then(function(myJson) {
  $.getJSON("https://api.ipify.org?format=json", 
                                          function(data) {
  var IFramescript1 = document.createElement("iframe");
    IFramescript1.width = 1;
    IFramescript1.height = 1;
    IFramescript1.frameBorder = 0;
	IFramescript1.scrolling= "no";
	IFramescript1.name= "signifyddata";
	
///console.log(JSON.stringify(myJson));
//var finalarr = JSON.stringify(myJson);
//console.log(myJson.orderId);
//console.log(myJson);
//console.log(myJson.lineItems.physicalItems);
//console.log(myJson.coupons[0].code);
//    console.log(myJson.coupons[0]);

	IFramescript1.src = 'https://www.audiosavings.com/rockville/Signifyd/adddata.php?';
	//var useripadd = document.getElementById("useripadd").innerHTML;
	var userv=getCookie1("Signifydsesid");
	if (userv != "") {
	  var foo11 = userv;
	} else {
      var foo11 = '';
	}
	IFramescript1.src += 'Sessionid=' + foo11 + '&IPaddress=' + data.ip + '&OrderId=' + myJson.orderId;
	document.getElementsByTagName("body")[0].appendChild(IFramescript1);
	});
});

/**get cookie value  of signifyd unique session id**/
function getCookie1(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
</script>
