//顶部header部分
var toBeFixDiv;
$(document).ready(function(){
    toBeFixDiv=$("#header");
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if(scrollTop<=70){
            $("#header").removeClass('Min');
        }else{
            $("#header").addClass('Min');

        }
    });
});
//页面滚动加载动画
new WOW().init();
//layui配置
layui.use(['element','carousel'],function(){
    var layer=layui.layer,carousel=layui.carousel,element=layui.element;
    $('.abc').on('click',function(){
        layer.msg('此图片为演示图片后台可添加修改<br>此处可添加跳转链接');
    });
    carousel.render({
        elem:'#webBanner',width:'100%',height:'100%',interval:4000,arrow:'always',autoplay:true
    });
});
//首页新闻
var iNews=new Swiper('#iNewsSwper',{
    loop:true, // 循环模式选项
    navigation:{
        nextEl:'#iNbtn1',prevEl:'#iNbtn2',
    }
});
//首页主要客户轮播
var iCustomer=new Swiper('#iCustomer',{
    speed:300,autoplay:{delay:3000},loop:true, // 循环模式选项
    slidesPerGroup:3,slidesPerView:6,spaceBetween:10,navigation:{
        nextEl:'#iCustomerBtn1',prevEl:'#iCustomerBtn2',
    }
});