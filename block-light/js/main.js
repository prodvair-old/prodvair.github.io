$(function () {
    var check = false;

    $('.block')
        .removeClass('active')
        .on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
        })
        .on('dragstart', function(e) { 
            e.preventDefault(); 
        })
        .on('mousedown', function (e) {
            if (e.which == 1) {
                activate($('.block'));
            }
        })
        .on('mouseup', function (e) {
            if (e.which == 1) {
                $('.block').unbind('mousemove');
                check = true;
            }
        });
    
    function activate(block) {
        block.bind('mousemove', function(e) {
            $(this)
                .toggleClass('active')
                .unbind('mousemove')
                .on('mouseover', function () {
                    if (!check) {
                        activate($(this))
                    }
                })
        })
    }
        
    $("body").on('keypress', function(e){
        if (e.which == 32) {
            $('.block').removeClass('active');
        }
    });
})