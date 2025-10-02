$(document).ready(function() {
    // Back to top button show/hide
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    // Smooth scroll for back to top
    $('#backToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // Smooth scroll for navbar links
    $('.navbar a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        if ($(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 70 // offset for navbar height
            }, 800);
        }
    });

    // Parallax effect
    $(window).on("scroll", function() {
        var scrolled = $(window).scrollTop();
        $(".parallax").each(function() {
            var offset = $(this).offset().top;
            var height = $(this).outerHeight();
            if (scrolled + $(window).height() > offset && scrolled < offset + height) {
                var yPos = -(scrolled - offset) * 0.4; // speed factor
                $(this).css("background-position", "center " + yPos + "px");
            }
        });

        // Hero text zoom/fade effect
        var heroText = $(".hero h1");
        if (heroText.length) {
            var scrollTop = $(window).scrollTop();
            var scale = Math.max(0.8, 1 - scrollTop / 1000); // scale from 1 to 0.8
            var opacity = Math.max(0.5, 1 - scrollTop / 500); // fade from 1 to 0.5
            heroText.css({
                transform: "scale(" + scale + ")",
                opacity: opacity
            });
        }


        // Highlight navbar links on scroll
        var scrollPos = $(document).scrollTop();
        $('.navbar a').each(function() {
            var section = $($(this).attr('href'));
            if (section.length) {
                if (scrollPos >= section.offset().top - 80 &&
                    scrollPos < section.offset().top + section.outerHeight() - 80) {
                    $('.navbar a').removeClass('active');
                    $(this).addClass('active');
                }
            }
        })
    })
})