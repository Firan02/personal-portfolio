
function changeImage() {
  var image = document.getElementById('myPic');
  if (image.src.match("svgImage")) {
      image.src = "./resources/media/images/gifImage.gif";
  }else {
      image.src = "./resources/media/images/svgImage.png";
  }
}

const message = document.getElementById('message');
const param = new URLSearchParams(window.location.search);
const username = param.get('username');
const pw = param.get('pw');

if(username.toLowerCase() === 'codecademy' && pw === 'ilovecoding'){
  message.innerHTML = 'We love coding too!';
} else if(!username || !pw){
  message.innerHTML = 'Add some client-side validation!';
} else {
  message.innerHTML = 'Hurray for client-side validation!';
}


