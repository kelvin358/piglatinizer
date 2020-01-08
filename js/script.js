$( "document" ).ready(function() {

$('#button').click(function(){
    let str = $('.input').val();
    $('.output').text(piglatin(str));

});

function piglatin(str){
  var firstLetter = str[0];
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(firstLetter)){
    return str + 'ay';
}
  else
    return str.slice(1) + firstLetter + 'ay';
};

});

//python3 -m http.server 3000