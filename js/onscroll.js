$(document).ready(function() {
    
    $('html, body').css({
       'overflow' : 'hidden',
        'height' : '100%'
    });
    
    $(window).scroll(function() {
        var windowScroll = $(this).scrollTop();
        if(windowScroll <= 0) {
            $('.active').removeClass('active');
            section = "home";
        } else if(windowScroll >= 485) {
            $('#navigation').css({
                'position' : 'fixed',
                'top' : '200px'
            });
            $('#scrollup').css({
                'position' : 'fixed',
                'top' : '476px'
            });
        } else if(windowScroll <= 484) {
            $('#navigation').css({
                'position' : 'absolute',
                'top' : '-16px'
            });
            $('#scrollup').css({
                'position' : 'absolute',
                'top' : '260px'
            });
        }
        if(windowScroll >= profileScroll) {
            $('.active').removeClass('active');
            $('.profile').addClass('active');
            section = "profile";
        }
        if(windowScroll >= abilitiesScroll) {
            $('.active').removeClass('active');
            $('.abilities').addClass('active');
            section = "abilities";
        }
        if(windowScroll >= projectsScroll) {
            $('.active').removeClass('active');
            $('.projects').addClass('active');
            section = "projects";
        }
        if(windowScroll >= contactScroll) {
            $('.active').removeClass('active');
            $('.contact').addClass('active');
            section = "contact";
        }   
               
    });
        
});

var animate = false;

window.addEventListener("mousewheel", function(e) {
    
    var wDelta = e.wheelDelta < 0 ? "down" : "up";
    
    if(animate == false) {
        if(wDelta == "down") {

            switch(section) {
                case "home":
                    animate = true;
                    $('body').animate({scrollTop: profileScroll}, 1000, function() {
                        animate = false;
                    });
                    break;
                case "profile":
                    animate = true;
                    $('body').animate({scrollTop: abilitiesScroll}, 1000, function() {
                        animate = false;
                    });
                    break;
                case "abilities":
                    animate = true;
                    $('body').animate({scrollTop: projectsScroll}, 1000, function() {
                        animate = false;
                    });
                    break;
                case "projects":
                    animate = true;
                    $('body').animate({scrollTop: contactScroll}, 1000, function() {
                        animate = false;
                    });
                    break;
            }

        } else {
        
            switch(section) {
                case "contact":
                    animate = true;
                    $('body').animate({scrollTop: projectsScroll}, 1000, function() {
                        animate = false;
                    });
                    break;
                case "projects":
                    animate = true;
                    $('body').animate({scrollTop: abilitiesScroll}, 1000, function() {
                        animate = false;
                    });
                    break;
                case "abilities":
                    animate = true;
                    $('body').animate({scrollTop: profileScroll}, 1000, function() {
                        animate = false;
                    });
                    break;
                case "profile":
                    animate = true;
                    $('body').animate({scrollTop: 0}, 1000, function() {
                        animate = false;
                    });
                    break;
            }

        }
    }
    
});