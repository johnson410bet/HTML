$(document).ready(function(){
    $('.tnc-section h5').click(function(){
        $('.tnc-section .tnc-content').toggle({
            duration: 500,
            start: function(){
                $('#tnc i').toggleClass('up');
            },
        });
    });
});