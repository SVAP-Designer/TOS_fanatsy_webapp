$(document).ready(function () {
    //intro_slide_home
    $('.intro_slide').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
    })

    // home-slider    
    $('.home_slider').owlCarousel({
        center: true,
        items: 1,
        stagePadding: 30,
        loop: true,
        dots: true,
        margin: 10,
    });

    /*Custom Tab*/
    $(".tab_view>ul>li>a[data-toggle='tab']").click(function () {
        tab_id = $(this).attr('data-target');
        tab_num = $(this).parent().index();
        var li = $(this).parent().parent().children().removeClass('active');
        $(this).parent().addClass("active");
        $(`${tab_id}`).css({
            "-webkit-transform": "translateX(" + -$(`${tab_id}` + "> .tab-data").width() * tab_num + "px)",
            "-moz-transform": "translateX(" + -$(`${tab_id}` + "> .tab-data").width() * tab_num + "px)",
            "transform": "translateX(" + -$(`${tab_id}` + "> .tab-data").width() * tab_num + "px)"
        });
        $(`${tab_id}` + "> .tab-data").removeClass("active");
        tab_num_data = $(this).parent().index() + 1;
        $(`${tab_id}` + "> .tab-data:nth-child(" + tab_num_data + ")").addClass("active");
    });

  /*slide-menu*/
$('.overlay-nav').on('click', function () {
                $('.sidenav').removeClass('active');
                $('.overlay-nav').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('.sidenav').addClass('active');
                $('.overlay-nav').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });    

});
/*click to clipboard*/
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
}    
