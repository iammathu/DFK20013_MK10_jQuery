$(document).ready(function(){

$("#loginBtn").click(function(){

var username = $("#username").val();
var password = $("#password").val();

if(username == "" || password == "")
{

$("#popupLogin").popup("open");

}
else
{

$.mobile.changePage("#infoPage");

}

});

});