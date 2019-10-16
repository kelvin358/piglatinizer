$( "document" ).ready(function() {

$('#button').click(function(){
    //let str = $('.input').val();
    //$(.output).text(piglatin(str));
    $('.output').text('.input');

});

function piglatin(str){
  var firstLetter = str[0];
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(firstLetter)){
    return str + 'ay';
}
  else
    str.slice(1);
    return str + firstLetter + 'ay';
};

});

//python3 -m http.server 3000