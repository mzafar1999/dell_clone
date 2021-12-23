$(document).ready(function() {
    $(".toggle").click(function() {
        $(this).next(".content").slideToggle(300)
    })
})

$(document).ready(function() {
    $('.sidebar-btn').click(function() {
        $('nav').toggleClass('active');
    })
})