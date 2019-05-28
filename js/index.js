$(function(){
    // var height=document.documentElement.clientHeight;
    // $(".box").css("height",height+"px")
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed:1000,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        //自动切换
        autoplay:true
    })

    //切换 首页 我的
$(".tab").on("click",function(){
    var index=$(this).index()
    $(this).addClass("onbg").siblings(".tab").removeClass("onbg")

    var temp=$(".temp").eq(index).html();
    var html=_.template(temp);
    $(".box").html(temp);
})

    
})