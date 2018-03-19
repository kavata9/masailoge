//carousel for the main page

var imageSlider = document.getElementById('imagesSlider');

var images =["url('../Masailoge/pics/image1.jpeg')" , "url('../Masailoge/pics/pic3.jpg')" , "url('../Masailoge/pics/pic5.gif')"];
var counter = 0;

function carousel(){
imageSlider.style.backgroundImage = images[counter];
counter++;
if(counter > 2 ){
 counter = 0;
}
}
setInterval(carousel, 2000);
//This will make text appear as a fade in.
var $el = $(".slideText1:first"), text = $el.text(),
  words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
  html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
$(this).delay(i*100).fadeIn(200);
});
var $el = $(".slideText2:first"), text = $el.text(),
  words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
  html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
$(this).delay(i*400).fadeIn(500);
});
var $el = $(".slideText3:first"), text = $el.text(),
  words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
  html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
$(this).delay(i*600).fadeIn(700);
});
var $el = $(".slideText4:first"), text = $el.text(),
  words = text.split(" ");

var html = "";
for (var i = 0; i < words.length; i++) {
  html += "<span>" + words[i] + " </span>";
};
$el.html(html).children().hide().each(function(i){
$(this).delay(i*900).fadeIn(800);
});
