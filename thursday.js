function makeMadLib() {
    var storyDiv = document.getElementById("story");
    var person = document.getElementById("person").value;
    var brand = document.getElementById("brand").value;
    var shoe = document.getElementById("shoe").value;
    storyDiv.innerHTML = person + " really likes " + shoe + " from " + brand + " ";
  }
  
  var libButton = document.getElementById('lib-button');
  libButton.addEventListener('click', makeMadLib);