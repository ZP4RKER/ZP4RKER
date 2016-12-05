var windowHeight,

    profileTop,
    profileOHeight,
    profileScroll,

    abilitiesTop,
    abilitiesOHeight,
    abilitiesScroll,

    projectsTop,
    projectsOHeight,
    projectsScroll,

    contactTop,
    contactOHeight,
    contactScroll,
    
    section;

$(document).ready(function() {
    
    windowHeight = $(window).height();
    
    profileTop = $('#profile').offset().top;
    profileOHeight = $('#profile').outerHeight(true);
    profileScroll = profileTop + profileOHeight - windowHeight;

    abilitiesTop = $('#abilities').offset().top;
    abilitiesOHeight = $('#abilities').outerHeight(true);
    abilitiesScroll = abilitiesTop + abilitiesOHeight - windowHeight;

    projectsTop = $('#projects').offset().top;
    projectsOHeight = $('#projects').outerHeight(true);
    projectsScroll = projectsTop + projectsOHeight - windowHeight;

    contactTop = $('#contact').offset().top;
    contactOHeight = $('#contact').outerHeight(true);
    contactScroll = contactTop + contactOHeight - windowHeight;
    
    section = "home";
    
})