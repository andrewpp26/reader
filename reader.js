$(document).ready(function(){
  $("button").click(function(){
    $.get("https://192.168.1.109:8080/recargaServer/api/products", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
