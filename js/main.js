jQuery(document).ready(function () {
    /*  Subscription form   */
    $('.success-message').hide();
    $('.error-message').hide();

    $('.subscribe form').submit(function () {
        var postdata = $('.subscribe form').serialize();
        $.ajax({
            type: 'POST',
            url: 'sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function (json) {
                if (json.valid == 0) {
                    $('.success-message').hide();
                    $('.error-message').hide();
                    $('.error-message').html(json.message);
                    $('.error-message').fadeIn();
                } else {
                    $('.error-message').hide();
                    $('.success-message').hide();
                    $('.subscribe form').hide();
                    $('.success-message').html(json.message);
                    $('.success-message').fadeIn();
                }
            }
        });
        return false;
    });
    
/*  About   */

    $(".open-about").click(function () {
        $(".top").hide();
        $(".about-detail").fadeIn();
    });

    $(".back").click(function () {
        $(".about-detail").hide();
        $(".top").fadeIn();

    });



});