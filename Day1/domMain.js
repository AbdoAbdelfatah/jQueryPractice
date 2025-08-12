// Append new Div with class 'black'.
$('.container1').append('<div class="black">Black</div>');
//Add new Div with class 'white' as the first child of the section.
$('.container1').prepend('<div class="white">White</div>');
//Insert new <P> with class 'yellow' before <P> with class 'pink'.
$('.container1 .pink').before('<p class="yellow">Yellow</p>');





// Replace every P of the section with anchor with the same textContent and give it a href attribute ["http://"+textContent]
$('.container2 p').each(function() {
    var txt = $(this).text();
    $(this).replaceWith('<a href="http://'+txt+'">'+txt+'</a>');
});






// wrap the image with figure element - insert new <figcaption> with text Content "Coffee" after the image.
$('.container3 img').wrap('<figure></figure>');
$('.container3 img').after('<figcaption>Coffee</figcaption>');







// - Empty all <td> with class 'col-age'.
$('.container4 td.col-age').empty();
// - Add Class 'man' to the td which contains 'mohsen'.
$('.container4 td:contains("Mohsen")').addClass('man');
// - Remove class 'your-email' from all <td> which has it and add it to all <td> which has not
$('.container4 td').each(function() { 
    if($(this).hasClass('your-email')) 
        $(this).removeClass('your-email');
    else
        $(this).addClass('your-email');
});







//Filter The <li> and return only that has index that can be divided by 3.
$('.container5 li').each(function(index) {
    if( index % 3 === 0)
        $(this).css('color', 'red');
});




//- Change the value of input which named "username" to <yourname>
$('.container6 input[name="username"]').val('Abdelrahman Abdelfatah')
//- Make the checkbox in the form with id 'my-form' checked.
$('.container6 #my-form input[type="checkbox"]').attr('checked', true);
