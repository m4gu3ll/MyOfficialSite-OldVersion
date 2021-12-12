//Poniżej wpisz ile jest zdjęć - 1
var photoCount = 14;

const randPhotoBtn = document.getElementById('randPhoto_btn');
let number = Math.floor(Math.random() * 14) + 1;
let url = "coffeespedition/coffee" + number + ".png";
console.log(number);
randPhotoBtn.setAttribute('href', url);