//导航高亮
$("#header .main-menu a").each(function(){
    if($(this)[0].href==String(window.location)&&$(this).attr('href')!=""){
        $(this).parents("li").addClass("active");
    }
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
var iCustomer=new Swiper('#iCustomer .icustomer-slide',{
    speed:300,autoplay:{delay:3000},loop:true, // 循环模式选项
    slidesPerGroup:3,slidesPerView:6,spaceBetween:10,navigation:{
        nextEl:'#iCusbtn1',prevEl:'#iCusbtn2',
    }
});
//内页导航条特效
$('.pagesNavUl').moveline({
    color:'#E95625',position:'inner',height:3,animateType:'jswing',mouseenter:function(ret){
        ret.ele.addClass('active').siblings().removeClass('active');
    }
});
//关于我们页 发展历程
jQuery(".aHistoryBanner").slide({
    mainCell:"ul",effect:"leftMarquee",vis:3,autoPlay:true,interTime:25,
});
//关于我们页 企业资质
var aQUBottom1=new Swiper('#aQUBottom1 .aQu-slide',{
    // speed:300,autoplay:{delay:3000},
    loop:true, // 循环模式选项
    slidesPerGroup:2,slidesPerView:4,spaceBetween:10,navigation:{
        nextEl:'#aQUBottom1 .aQubtn1',prevEl:'#aQUBottom1 .aQubtn2',
    }
});
var aQUBottom2=new Swiper('#aQUBottom2 .aQu-slide',{
    // speed:300,autoplay:{delay:3000},
    loop:true, // 循环模式选项
    slidesPerGroup:2,slidesPerView:4,spaceBetween:10,navigation:{
        nextEl:'#aQUBottom2 .aQubtn1',prevEl:'#aQUBottom2 .aQubtn2',
    }
});