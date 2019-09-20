$("#login").click(function(){
var user=$("#user").val();
var pass=$("#pass").val();
console.log(pass);
if(user=="admin"&& pass=="1234"){
	alert("bienvenido");
	window.location="pag.html";
	localStorage.setItem('session', "acept");
}else{
	alert("Este usuario no fue registrado");
}
})
