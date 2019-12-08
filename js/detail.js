//  顶部滚动标签
scroll();

//  判断用户是否登录
user(false);

//  点击弹出搜索框
search();

//  侧边图片将效果图换成改图
imgCheck()

//  放大镜
enlarge($('.info_img')[0])

//  侧边图片将效果图换成改图
function imgCheck(){
    $('.detail_img div').each(function(i,el){
        $(el).on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.info_img img').attr('src',$(this).children().attr('src'))
        })
    })
}

//  图片放大镜效果
// function enlarge(){
//     //  鼠标移入显示
//     $('.info_img').on('mouseenter',function(){
//         $(this).children('.hidden').removeClass('hidden');
//         var X = $(this)[0].offsetLeft;
//         var Y = $(this)[0].offsetTop;
//         $(".icon_catch").before("<div class=move><div>");             
//         //   鼠标移动
//         $(document).on('mousemove',function(ev){
           
//             var NX = ev.pageX - X - $('.move').width()/2;
//             var NY = ev.pageY - Y - $('.move').height()/2;
//             $('.move').css({
//                 top: NY,
//                 left: NX
//             })            
//             // console.log(ev.pageX)
//         })
//         //   鼠标移出消失
//         $(this).on('mouseleave',function(){
//             console.log(1)
//             $('.catch').addClass('hidden');
//             $('.move').remove();
//         }) 
//     }) 
    
// }