// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').textContent = 'Guero';
document.getElementById('favorites').textContent = 'Music, Apples and Movies ';
document.getElementById('hometown').textContent = 'Denver Co';
// Iterate through each li and change the class to "list-item".
var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].className = 'list-item';
}
// Create a new img element and set its src attribute to a picture of you. Append that element to the page. 
// var myPic = document.createElement('img');
// myPic.src = 'images/me.jpg';
// document.body.appendChild(myPic);

// var place= document.getElementsByClass('me');
// var firstImage= 'images/plane.jpg';
// place.src= 'images/me.jpg';

//excercises
var body= document.body;
var newImage= document.createElement('img');
newImage.src= 'https://newnation.sg/wp-content/uploads/random-pic-internet-22.jpg';
newImage.style.border= '5px blue solid';
document.body.appendChild(newImage);