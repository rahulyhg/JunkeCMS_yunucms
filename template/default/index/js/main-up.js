//顶部header部分
var toBeFixDiv;
$(document).ready(function () {
    toBeFixDiv = $("#header");
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop <=70) {
            $("#header").removeClass('Min');
        } else {
            $("#header").addClass('Min');

        }
    });
});

//页面滚动加载动画
new WOW().init();
