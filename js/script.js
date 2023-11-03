$(document).ready(function(){
    setInterval(toLeft,2500);
    function toLeft(){
        $('#slide div').stop().animate({left:'-1200px'},1000,function(){
            $('#slide div').append($('#slide a').eq(0));
            $('#slide div').css('left',0);
        });
    }
});