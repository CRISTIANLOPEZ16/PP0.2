var carta="";
var cartas="";
miStorage = window.localStorage;
$(function(){
    if (localStorage.getItem("session")!=null) {
	if (localStorage.getItem("datos")==null){
$.getJSON("json/cartas.json", function(datos) {
                cartas=datos;
                localStorage.setItem('datos', JSON.stringify(cartas));
                console.log(cartas);
                $.each(cartas["cartas"], function(idx,cartas) {
                	$("#tablaC").append("<tr><th>"+cartas["Numero"]+"</th><th>"+cartas["Carta"]+"</th><th>"+cartas["Cant"]+"</th></tr>");
                });
            });
}else{
    cartas=JSON.parse(miStorage.getItem("datos"));
    for (var i in cartas.cartas) {
        $("#tablaC").append("<tr><th>"+cartas.cartas[i].Numero+"</th><th>"+cartas.cartas[i].Carta+"</th><th>"+cartas.cartas[i].Cant+"</th></tr>");
    }
}
}else{
    window.location="index.html";
}
});

$(document).on("click","#img",function(){
	carta=$(this).data("id");
    if(cartas!=null){
        for (var i in cartas.cartas) {
            if(cartas.cartas[i].Numero==carta){
                cartas.cartas[i].Cant=parseInt(cartas.cartas[i].Cant, 10)+1;
            }
        }
    }
    console.log(cartas.cartas[carta-1].Cant);
    localStorage.setItem('datos', JSON.stringify(cartas));
    pintar();
});
$(document).on("click","#Reg_Cart",function(){
    var numero=$("#num").val();
    var nomCart=$("#Select").val();
    cartas=JSON.parse(miStorage.getItem("datos"));
    var n=cartas.cartas.length+1;
    console.log(n);
    let nuevaData = cartas.cartas.push({"Numero": numero, "Carta": numero+" de "+nomCart,"Cant": 0});
     localStorage.setItem('datos', JSON.stringify(cartas));
    pintar();

});

function pintar(){
    cartas=JSON.parse(miStorage.getItem("datos"));
    ordenarDes(cartas.cartas, 'Cant');
    console.log(cartas);
    var html1="<tr><th>#</th><th>Carta</th><th>Cant</th></tr>"
    for (var i in cartas.cartas) {
        html1+="<tr><th>"+cartas.cartas[i].Numero+"</th><th>"+cartas.cartas[i].Carta+"</th><th>"+cartas.cartas[i].Cant+"</th></tr>"
    }
    $("#tablaC").html(html1);
}

function ordenarDes(p_array_json, p_key) {
   p_array_json.sort(function (a, b) {
      return a[p_key] < b[p_key];
   });
}