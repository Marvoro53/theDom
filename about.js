document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').textContent = 'Guero';
document.getElementById('favorites').textContent = 'Music, Apples and Movies ';
document.getElementById('hometown').textContent = 'Denver Co';
var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].className = 'list-item';
}
var myPic = document.createElement('img');
myPic.src = 'images/me.jpg';
document.body.appendChild(myPic);
