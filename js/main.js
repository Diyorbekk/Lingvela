$(document).ready(function () {
    $('.language-box-text').on('click', function() {
        $('#default').hide()
        $('#ru').css('display', 'flex')
        $('#uz').css('display', 'flex')
        $('#ki').css('display', 'flex')
    });

    $('.gradient-button').on('click',function () {
        $('.modal-confirm').css('display', 'flex')
        $('.modal-for-blur').css('filter', 'blur(2px)')
    });

    $('.modal-confirm .gradient-button').on('click',function () {
        $('.modal-confirm').css('display', 'none')
        $('.modal-for-blur').css('filter', 'unset')
    });

    $('.my-music .theme-night').on("click", function () {
        $('.my-music,.menu-panel,.moon-icon,.panel-icons').toggleClass('night');
        $('.text-18,.text-20,.text-14').toggleClass('text-white');
    });

    $('.my-new-music .theme-night').on("click", function () {
        $('.my-new-music,.list-icon-play,.moon-icon,.panel-icons').toggleClass('night');
        $('.text-18,.text-11').toggleClass('text-white');
    });

    $('.my-music-play .theme-night').on("click", function () {
        $('.my-music-play,.heart-icon,.my-music-play-header,.player-fixed,.play-icon,.ft-played-round-bg,.ft-played,.ft-played-round').toggleClass('night');
        $('.text-18,.text-11,.text-20').toggleClass('text-white');
    });





    $('#ru').on('click', function() {
        if ($('#uz').css('display') === 'none' || $('#ki').css('display') === 'none'){
            $('#ru').on('click', function() {
                $('#ru').show().removeClass('active-border');
                $('#ru .fa').addClass('fa-chevron-up');
                $('#uz').show().removeClass('active-border');
                $('#ki').show().addClass('active-border');
            })
        }
        else {
            $('#uz').hide();
            $('#ki').hide();
            $('#ru .fa').removeClass('fa-chevron-up');
            $('#ru .fa').addClass('fa-chevron-down');
            $('#ru').addClass('active-border')
        }
    });

    $('#ki').on('click', function() {
        if ($('#ru').css('display') === 'none' || $('#uz').css('display') === 'none'){
            $('#ki').on('click', function() {
                $('#ru').show();
                $('#uz').show();
                $('#ru .fa').addClass('fa-chevron-up');
                $('#ki .fa').removeClass('fa-chevron-down');
                $('#ki').show().removeClass('active-top').addClass('active-border');
            })
        }
        else{
            $('#uz').hide();
            $('#ru').hide();
            $('#ru .fa').removeClass('fa-chevron-up');
            $('#ki .fa').addClass('fa-chevron-down');
            $('#ki').addClass('active-border').addClass('active-top')
        }

    });

    $('#uz').on('click', function() {
        if ($('#ru').css('display') === 'none' || $('#ki').css('display') === 'none'){
            $('#uz').on('click', function() {
                $('#ru').show()
                $('#uz').show().removeClass('active-border').removeClass('active-top');
                $('#ru .fa').addClass('fa-chevron-up');
                $('#uz .fa').removeClass('fa-chevron-down')
                $('#ki').show().addClass('active-border')
            })
        }
        else {
            $('#ki').hide();
            $('#ru').hide();
            $('#ru .fa').removeClass('fa-chevron-up');
            $('#uz .fa').addClass('fa-chevron-down');
            $('#uz').addClass('active-border').addClass('active-top');
        }
    });


});