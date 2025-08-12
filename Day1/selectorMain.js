// Make the Background of every DIV like its class name and the text color of paragraph 
//like its class name. (Dynamically). [Hint: Use each()][Bonus].
$('.container1 div').each(function() {
    var className=$(this).attr('class');
    $(this).css('background-color', className);
});
$('.container1 p').each(function() {
    var className=$(this).attr('class');
    $(this).css('color', className);
});



//- Replace the text content of the anchors (HREF which contains word "google") with "Google".
$('.container2 a[href*="google"]').text('Google');
//- Replace the text content of the anchors (HREF which ends with word "org") with "IEEE".
$('.container2 a[href$=".org"]').text('IEEE');
//- Replace the text content of the anchors (HREF which starts with word "https") with "Facebook".
$('.container2 a[href^="https"]').text('Facebook');
//- Append the word "Official Website" text content of the anchors (HREF which starts with word "http")
$('.container2 a[href^="http"]').append(' Official Website');





// Find the image in the third figure and change it's src to 'img/orange.png' and the text 
//content of its figcaption into "fig.3 - Orange Juice". 

$('.container3 figure:nth-of-type(3) img').attr('src', '../img/orange.png');
$('.container3 figure:nth-of-type(3) figcaption').text('fig.3 - Orange Juice'); 





//- Find the td which has class "my-name" and change it's color to "blue". [Use: attribute method not class method].
$('.container4 td.my-name').attr('style', 'color:blue');
//- Change the background of odd cells (td) in the table into pink color.
$('.container4 tr td:nth-child(odd)').css('background-color', 'pink');
//- Find the second (td) of the last (tr) of the first table and change it's font weight to "Bold"
$('.container4 tr:last td:nth-child(2)').css('font-weight', 'bold');








//- Find the second list item of the unordered list and change it's font style to "italic".
$('.container5 ul li:nth-of-type(2)').css('font-style', 'italic');
//- Find the next direct sibling to second list item of the ordered list and change it's color to "red"
$('.container5 ol li:nth-of-type(3)').css('color', 'red');