// 自适应方法1
// window.addEventListener("load",function(){
//     // 获取常量
//     let container = document.querySelector(".container");
//     let clientW = 0;
//     resize();
//     //2 监听窗口大小变化
//     window.addEventListener("resize",resize);

//     function resize(){
//         // 2.1获取改变后的宽度
//         clientW = window.innerWidth;

//         // 2.2判断屏幕宽度
//         if(clientW >= 1200){
//             container.style.width = "1170px";
//         }else if(clientW >= 992){
//             container.style.width = "970px";
//         }else if(clientW >= 768){
//             container.style.width = "750px";
//         }else {
//             container.style.width = "100%";
//         }
//     }

// });



// 轮播图使用方法
$(function(){
    $(window).on("resize",function(){
        // 1.获取窗口大小
        let clientW = $(window).width();
        // console.log(clientW);
        // 设置临界值为800px
        let isShowBigImage = clientW >= 800;
        // 3.获取item
        let $allItems = $("#lk_carousel .item");
        // console.log($allItems);
        // 4.遍历
        $allItems.each(function (index, item ) {
            // 4.1.获取图片路径
            // console.log(index);
            let src = isShowBigImage ? $(item).data("lg-img") :  $(item).data("sm-img");
            let imagUrl = 'url(" ' + src +' ")'
            // 设置背景
            $(item).css({          
                backgroundImage:imagUrl
            });
            // 设置lmg标签显示小图
            if( !isShowBigImage){
            let $img = "<img src = '"+ src +"'>";
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }

        });

    });
   
    $(window).trigger("resize");

    // 2.工具提示
    $('[data-toggle="tooltip"]').tooltip();

    // 3.产品特色 -动态处理出现滑块的宽度
    $(window).on("resize",function(){

        let $ul = $("#lk_product .nav");
        let $allLis =  $("[role='presentation']", $ul);
        // console.log($allLis);

        // 遍历
        let totalW = 0;
        $allLis.each( function (index,item){
            totalW += $(item).width();
        });
        //  console.log(totalW);
        // console.log(totalW);
     let parentW = $ul.parent().width();

     // 设置宽度
     if(totalW > parentW ) {
         $ul.css({
             width:totalW + "px"
         });
     }else{
        //  $ul.removeAttribute("style");
        $ul.removeAttri("style");
     }
    });

    // 导航处理
    let $allLis = $("#jqr-nav1 li");
    $($allLis[2]).on("click",function(){
        $("html,body").animate({scrollTop:$("#lk_hot").offset().top},1000);
    });

});