//Check if Local storage has Value or not
var myStorage = window.localStorage;
if(myStorage==null || myStorage==""){
var val=myStorage.setItem('cart-count',0)
}
//Local Storage ends

//AJAX CALL STARTS
function missionBackend(){
var http = new XMLHttpRequest();
http.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/product ',true);
http.send();
http.onreadystatechange=function(){
if(this.readyState==4)
{
var list=JSON.parse(this.responseText);
for(var i=0;i<10;i++){
if(list[i].isAccessory==true){
document.getElementById('accessories').appendChild(item(list[i]));
}
else{
document.getElementById('garments').appendChild(item(list[i]));
}
}
}
}
}
//AJAX CALL ENDS
missionBackend()




function item(list){
var ele=document.createElement('div');
ele.id="element";
var link=document.createElement('a');
link.href='page.html?prod_id='+list.id;
link.id="boxlink";
var box=document.createElement('div');
box.id="boxcase";
var showcase=document.createElement('img');
showcase.id="showcase";
showcase.src=list.photos[0];
var title=document.createElement('p');
title.id="title";
var title1=document.createTextNode(list.name);
var brand=document.createElement('p');
brand.id="brand";
var brand1=document.createTextNode(list.brand)
var price=document.createElement('p');
price.id="price";
var price1=document.createTextNode('₹'+list.price);
ele.appendChild(link);
link.appendChild(box);
box.appendChild(showcase);
box.appendChild(title);
title.appendChild(title1);
box.appendChild(brand);
brand.appendChild(brand1);
box.appendChild(price);
price.appendChild(price1);
//Cart Counter
document.getElementById('count').innerHTML=myStorage.getItem('cart-count');
var valu=parseInt(localStorage["cart-count"]);
//show value of Cart counter;
document.getElementById('count').innerHTML=valu;
return ele;
}
