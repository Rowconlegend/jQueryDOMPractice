$(function() {
    console.log("Lets get ready to party with jQuery!")
});

$('article img').addClass('image-center');
// $('article').children('img').addClass('image-center');

$('article p').eq(5).remove();

$('#title').css('font-size', function(){
   const random = Math.random() * 100;
   return random + 'px';
});

$('ol').append('<li>It can say whatever you want.</li>');

// $('ol').on('click', function(){
//     $(this).children('li').remove();
//     $(this).append('<p>I would like to apologize for this list existing. Lists are a great way to organize your content, but in this context it is dispicable and wrong.</p>');
// });

$('aside').empty().append($('<p>', {text:"I would like to apologize for this list existing. Lists are a great way to organize your content, but in this context it is dispicable and wrong."}));


$('.form-control').on('keyup blur change', function() {
    let red = $('input').eq(0).val();
    let green = $('input').eq(1).val();
    let blue = $('input').eq(2).val();
    $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue +')'); 
})

$('img').on('click', function() {
    $(this).remove();
});