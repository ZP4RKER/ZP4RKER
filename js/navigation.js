$(document).ready(function() {
    
    $('#scrolldown').click(function() {
        $('body').animate({scrollTop: profileScroll}, 1000);
    });
    
    $('#scrollup').click(function() {
        $('body').animate({scrollTop: 0}, 1000);
    });
    
    $('#navigation li').click(function() {
        if($(this).is('.profile')) {
            $('body').animate({scrollTop: profileScroll}, 1000);
        } else if($(this).is('.abilities')) {
            $('body').animate({scrollTop: abilitiesScroll}, 1000);
        } else if($(this).is('.projects')) {
            $('body').animate({scrollTop: projectsScroll}, 1000);
        } else if($(this).is('.contact')) {
            $('body').animate({scrollTop: contactScroll}, 1000);
        }
    })
    
})