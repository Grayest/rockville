<script>
    var userv=getCookie("XSRF-TOKEN");
console.log('userv');
var tag = document.createElement('script');
tag.src = "https://cdn-scripts.signifyd.com/api/script-tag.js";
tag.setAttribute('id','sig-api');
tag.setAttribute('data-order-session-id',getCookie('XSRF-TOKEN'));
tag.setAttribute('defer','');
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
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
