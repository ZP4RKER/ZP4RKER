jQuery.fn.getPath = function () {
    var current = $(this);
    var path = new Array();
    var realpath = "BODY";
    while ($(current).prop("tagName") != "BODY") {
        var name;
        if($(current).attr('id') != null) {
            name = '#' + $(current).attr('id');
        } else if($(current).attr('class') != null) {
            name = $(current).prop('tagName') + '.' + $(current).attr('class');
        } else {
            name = $(current).prop('tagName');
        }
        var selector = " " + name;
        path.push(selector);
        current = $(current).parent();
    }
    while (path.length != 0) {
        realpath += path.pop();
    }
    return realpath.toLowerCase();
}