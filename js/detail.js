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

//  点击购买
$('#buy').on('click',function(){
    window.open('../views/shoppingCart.html',)
})

//  侧边图片将效果图换成该图
function imgCheck(){
    $('.detail_img div').each(function(i,el){
        $(el).on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.info_img img').attr('src',$(this).children().attr('src'))
        })
    })
}
