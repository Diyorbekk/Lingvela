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





    $('#ru').on('click', function() {
        if ($('#uz').css('display') === 'none' || $('#ki').css('display') === 'none'){
            $('#ru').on('click', function() {
                $('#ru').show()
                $('#ru .fa').addClass('fa-chevron-up')
                $('#uz').show()
                $('#ki').show()
                $('#ki').addClass('active-border')
                $('#uz').removeClass('active-border')
                $('#ru').removeClass('active-border')
            })
        }
        else {
            $('#uz').hide()
            $('#ki').hide()
            $('#ru .fa').removeClass('fa-chevron-up')
            $('#ru .fa').addClass('fa-chevron-down')
            $('#ru').addClass('active-border')
        }
    });

    $('#ki').on('click', function() {
        if ($('#ru').css('display') === 'none' || $('#uz').css('display') === 'none'){
            $('#ki').on('click', function() {
                $('#ru').show()
                $('#uz').show()
                $('#ru .fa').addClass('fa-chevron-up')
                $('#ki .fa').removeClass('fa-chevron-down')
                $('#ki').show()
                $('#ki').addClass('active-border')
                $('#ki').removeClass('active-top')
            })
        }
        else{
            $('#uz').hide()
            $('#ru').hide()
            $('#ru .fa').removeClass('fa-chevron-up')
            $('#ki .fa').addClass('fa-chevron-down')
            $('#ki').addClass('active-border')
            $('#ki').addClass('active-top')
        }

    });

    $('#uz').on('click', function() {
        if ($('#ru').css('display') === 'none' || $('#ki').css('display') === 'none'){
            $('#uz').on('click', function() {
                $('#ru').show()
                $('#uz').show()
                $('#ru .fa').addClass('fa-chevron-up')
                $('#uz .fa').removeClass('fa-chevron-down')
                $('#ki').show()
                $('#ki').addClass('active-border')
                $('#uz').removeClass('active-top')
                $('#uz').removeClass('active-border')
            })
        }
        else {
            $('#ki').hide()
            $('#ru').hide()
            $('#ru .fa').removeClass('fa-chevron-up')
            $('#uz .fa').addClass('fa-chevron-down')
            $('#uz').addClass('active-border')
            $('#uz').addClass('active-top')
        }
    });


});