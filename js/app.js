function resizetovp() {
    var height = $(window).height();
    height = parseInt(height) + 'px';
    $('body').css('height',height);
}

$(document).ready(function() {
    resizetovp();
    $(window).bind('resize', resizetovp);
});

