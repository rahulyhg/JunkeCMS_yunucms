//导航高亮
$("#header .main-menu a").each(function(){
    if($(this)[0].href==String(window.location)&&$(this).attr('href')!=""){
        $(this).parents("li").addClass("active");
    }
});
//layui配置
layui.use(['element','carousel'],function(){
    var layer=layui.layer,carousel=layui.carousel,element=layui.element;
    carousel.render({
        elem:'#webBanner',width:'100%',height:'30vw',interval:4000,arrow:'always',autoplay:true
    });
});