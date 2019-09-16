var arr1 = JSON.parse(localStorage.getItem('Productlist'));

//AJAX CALL STARTS
function missionBackend(){
var http = new XMLHttpRequest();
var val1=location.search.split("=")
var val=val1[val1.length-1]
http.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/product/'+val,true);
http.send();
http.onreadystatechange=function(){
if(this.readyState==4)
{
console.log("Connected")
var list=JSON.parse(this.responseText);
document.getElementById('inserthere').appendChild(avail(list));
}
}
}
missionBackend()
//AJAX CALL ENDS


function avail(list){
var panel=document.createElement('div');
panel.id="panel"
var left=document.createElement('div');
left.id="leftside";
var image=document.createElement('img');
image.id="display";
image.src=list.photos[0];
left.appendChild(image);
var right=document.createElement('div');
right.id="rightside";
var heading=document.createElement('p');
heading.id="heading";
var brand=document.createElement('p');
brand.id="brand";
var price=document.createElement('p');
price.id="price";
var desc=document.createElement('p');
desc.id="desc";
var add=document.createElement('button');
add.id="add";
var head1=document.createTextNode(list.name);
var brand1=document.createTextNode(list.brand);
var price1=document.createTextNode("Rs."+list.price);
var desc1=document.createTextNode(list.description);
desc.appendChild(desc1);
var add1=document.createTextNode("Add to Cart");
heading.appendChild(head1);
panel.appendChild(left);
panel.appendChild(right);
right.appendChild(heading);
right.appendChild(brand);
right.appendChild(desc);
right.appendChild(price);
right.appendChild(add);
price.appendChild(price1);
add.appendChild(add1);
brand.appendChild(brand1);



// Check if Cart has Value else reset
var myStorage = window.localStorage;
if(!myStorage){
var val=myStorage.setItem('cart-count',0)
myStorage.setItem('Productlist',"[]")
}
//Resetter Ends

document.getElementById('count').innerHTML=myStorage.getItem('cart-count');
var valu=parseInt(localStorage["cart-count"]);
add.addEventListener("click",function(){
valu+=1;
var c1=document.getElementById('count').innerHTML=valu;
myStorage.setItem('cart-count',valu)

if(arr1.length==0){
var obj1={
"id":list.id,
"name":list.name,
"prev":list.preview,
"price":list.price,
"count":1
}
arr1.push(obj1);
}
else if (arr1.length != 0) {
// This is Fine
var countflag = 0
for(i=0;i<arr1.length;i++)
{
if(arr1[i].id==list.id)
{
arr1[i].count=parseInt(arr1[i].count)+1;
countflag+=1;
console.log("Count ka koshish hua: " + arr1[i].count);
}
}
if (countflag == 0) {
var obj1={
"id":list.id,
"name":list.name,
"prev":list.preview,
"price":list.price,
"count":1 
}
arr1.push(obj1);
}
console.log("Ye bhi hua")

}
window.localStorage.setItem('Productlist', JSON.stringify(arr1));

});
return panel;
}