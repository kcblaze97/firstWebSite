console.log('connected!');
var list = $('li');

$('ul').on("click","li",function(){
    $(this).toggleClass("complete");
   
});


var text;
$('ul').on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});
$('input').keypress(function(e){
    if(e.keyCode === 13){
        text = $(this).val();
        $(this).val("");

        $('ul').append("<li><span id='del'><i class='fas fa-trash-alt'></i></span> "+ text+"</li>");
        $(this).css({
            borderColor : "#2890b6"
        });
    }
});
$('#btn').on("click",function(){
         text = $('input').val();
        $('input').val("");
        console.log(text);
       if(text === ""){
           alert("Unesite tekst");
       } 
       else{
        $('ul').append("<li><span id='del'><i class='fas fa-trash-alt'></i></span> "+ text+"</li>")
       }
});