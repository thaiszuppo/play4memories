$(document).ready(function () {

    var $window = $(window);
    
    $(window).scroll(function(){
        var windowsize = $window.width();
        if (windowsize > 440) {
            //if the window is greater than 440px wide then turn on jScrollPane..
           
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }

        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    var $doc = $('html, body');
    $('').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
        return false;
    });

});