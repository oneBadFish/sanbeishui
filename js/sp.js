$(function(){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:8088/sanbeishui/sp.json",
        async:true,
        success:function(data){
            console.log(data)
            var temp=$("#tep").html();
            var html=_.template(temp);
            var tem=html({data:data});
            $(".shop").html(tem);
        }
    })



    //轮播
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
})