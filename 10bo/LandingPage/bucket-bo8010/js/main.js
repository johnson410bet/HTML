$(function() {
    $(".right-side").click(function() {
        $(this).toggleClass("active");
    });
    $(".step1 .btn").click(function(){
        openStep2()
    });

    $('.popup-wrap').click(function(){
        $(this).toggleClass('hide');
    });

    $(document).on('keyup', ".input-error", function() {
        $(this).removeClass('input-error');
    });

    $('.step2 button').click(function(){

        var inputs = $('.input').children().filter(function(){
            return !this.value;
        });
        if(inputs.length != 0) {
            inputs.parent().addClass('input-error');
            openErrorMsg('亲，所有栏位都要填写唷~');

            if(inputs.length == 1 && $('#tenbet input').val() === '') {
                openStep2();
            } else {
                openStep1();
           }

            return;
        }

        var data = $('form').serialize();

        $.ajax({
            method: 'GET',
            url: 'https://www.fibachina88.com/api/juventus-jerseys/',
            data: data,
            success: function(data){
                if(data == 'succeeded') {
                    openStep3();
                } else {
                    if(data.weibo && data.tenbet) {
                        openStep1();
                        openErrorMsg('亲，微博昵称与十博帐号都参加过活动罗~');
                        $('#weibo, #tenbet').addClass('input-error');
                    } else if(data.weibo) {
                        openStep1();
                        openErrorMsg('亲，这微博昵称已经参加过活动罗 ：）');
                        $('#weibo').addClass('input-error');
                    } else {
                        $('#tenbet').addClass('input-error');
                        openStep2();
                        openErrorMsg('亲，这十博帐号已经参加过活动罗 ：）');
                    }
                }
            },
        });
    });

    function openErrorMsg(text='') {
        $('.popup-wrap').toggleClass('hide');
        $('.popup-box p').text(text);
    }
    function openStep1() {
        $(".step1").removeClass("hide");
        $('.step2, .step3').addClass('hide');
    }

    function openStep2() {
        $(".step2").removeClass("hide");
        $('.step1, .step3').addClass('hide');
    }

    function openStep3() {
        $(".step3").removeClass("hide");
        $('.step1, .step2').addClass('hide');
    }
});
