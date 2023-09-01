$(function() {

    menuMobile();

    function menuMobile() {
        $('body').on('click','.menu-mobile p', function(e) {
            e.stopPropagation();
            $('.menu-mobile').find('ul').slideToggle();
        });

        $('body').on('click', function(e) {
            e.stopPropagation();
            $('.menu-mobile').find('ul').slideUp('open');
        });
    }

    disableTextS();

    function disableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }

    validateForm();

    function validateForm() {
        $('form').submit(function() {

            var e_error = false;
            var e_email = $('[name=email]').val();
            resetForm();

            if (e_email == "") {
                e_error = true;
                var em = $('[name=email]');
                em.css('border', '2px solid red');
                $('.form-text p').html('Por favor, insira um e-mail válido!');
            } else if (!e_email.includes("@") || !e_email.includes(".")) {
                e_error = true;
                var em = $('[name=email]');
                em.css('border', '2px solid red');
                $('.form-text p').html('Por favor, insira um e-mail válido!');
            }

            if (e_error == false) {
                $('input[type=text]').fadeIn(function() {
                    setTimeout(function() {
                        $('input[type=text],textarea').css('border','1px solid #ccc');
                    },2500);
                });
                $('input[type=text]').css('border','2px solid #5fb382');
                $('.box-success p').fadeIn(function() {
                    setTimeout(function() {
                        $('.box-success p').fadeOut();
                    },2000);
                });
                $(this)[0].reset();
            }

            return false;
        })
    }

    function resetForm() {
        var rsForm = $('input[type=text]');
        $(rsForm).focus(function() {
            $(this).css('border','1px solid #ccc');
            $('.search-form p').html('');
        })
    }

});