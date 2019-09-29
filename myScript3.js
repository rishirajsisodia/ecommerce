//AJAX CALL STARTS
// // function missionBackend(){
// var http = new XMLHttpRequest();
// http.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/product ',true);
// http.send();
// http.onreadystatechange=function(){
// if(this.readyState==4)
// {
// var list=JSON.parse(this.responseText);
// for(var i=0;i<10;i++){
// document.getElementById('leftside').appendChild(retrieve(list[i]));
// }
// }
// }
// }
//AJAX CALL ENDS
//missionBackend()
var sto=JSON.parse(localStorage.getItem('Productlist'));
    for(var i=0;i<sto.length;i++){
    document.getElementById('leftside').appendChild(retrieve(sto[i]));
    }
function retrieve(sto){
console.log(sto.name);
var list=document.createElement('li');
var box=document.createElement('div');
box.id="box";
var image=document.createElement('img');
image.id="label"
image.src=sto.prev;
var head=document.createElement('p');
head.id="head";
var h1=document.createTextNode(JSON.stringify(sto.name));
var quant=document.createElement('p');
quant.id="quant";
var val=document.createTextNode("X"+sto.count);
head.appendChild(h1);
quant.appendChild(val);
list.appendChild(box)
box.appendChild(image)
box.appendChild(head)
box.appendChild(quant)
// Check if Cart has Value else reset
var myStorage = window.localStorage;
if(!myStorage){
var val=myStorage.setItem('cart-count',0)
}
//Resetter Ends
document.getElementById('count').innerHTML=myStorage.getItem('cart-count');
return list;
}
var data=JSON.parse(localStorage.getItem('Productlist'))
var sum=0
for(var i=0;i<data.length;i++){
    sum=sum+data[i].price*data[i].count;
}
document.getElementById('totalprice').innerHTML="₹"+sum;