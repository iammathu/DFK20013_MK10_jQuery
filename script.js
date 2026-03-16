function semak(){

var user = $("#username").val();
var pass = $("#password").val();

if(user=="" || pass=="")
{
    $("#popupMsg").popup("open");
    return false;
}
else
{
    $.mobile.changePage("#page2");
    return false;
}
}