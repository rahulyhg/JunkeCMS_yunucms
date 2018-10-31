//顶部header部分
var toBeFixDiv;
$(document).ready(function () {
    toBeFixDiv = $("#header");
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop <= 70) {
            $("#header").removeClass('Min');
        } else {
            $("#header").addClass('Min');

        }
    });
});
//layui配置
layui.use(['element', 'carousel'], function () {
    var layer = layui.layer, carousel = layui.carousel, element = layui.element;
    $('.abc').on('click', function () {
        layer.msg('此图片为演示图片后台可添加修改<br>此处可添加跳转链接');
    });
    carousel.render({
        elem: '#webBanner', width: '100%', height: '100%', interval: 5000, arrow: 'always', autoplay: true
    });
});
//
$("#header .main-menu a").each(function () {
    if ($(this)[0].href == String(window.location) && $(this).attr('href') != "") {
        $(this).parents("li").addClass("active");
        $(this).parents("dd").addClass("active");
    }
});