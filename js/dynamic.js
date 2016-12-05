$(document).ready(function() {
    
    var windowHeight = $(window).height(),
        titleHeight = $('#title').height(),
        middlePage = windowHeight / 2,
        topPos = middlePage - titleHeight;
    
    $('#title').css('top', topPos + 'px');
    
});