<script>
 var checkoutlen = $('.Checkout-heading').length;
    if(checkoutlen == 0){
// Google Tag Manager Cookie code
// parse the url
        var path = '';
        try {
path = document.getElementById('signifyd-tmx').src;
        } catch(e){
        }
function getParameterByName1(name, url) {
		if (!url) url = path;
		name = name.replace(/[\[\]]/g, '\\$&');
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}
	// Live the URL parameter a variable name
	var foo = getParameterByName1('session_id');
	//var foo1 = foo.replace("stores/reotp-", "");


//alert(foo1);
// Give the cookie a duration
var now = new Date();
var time = now.getTime();
var expTime = time + 1000*31536000;
now.setTime(expTime);

// Set the cookie
if(foo !=''){
document.cookie = "Signifydsesid=" + foo + "; expires=" + now.toGMTString() + "; path=/";
}
    }
</script>
