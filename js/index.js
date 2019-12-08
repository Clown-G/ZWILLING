//  顶部滚动标签
scroll();
//  判断用户是否登录
user(false);
//  轮播图
banner();
//  点击弹出搜索框
search();
//  发现最爱
discover();
//  首页主体滚动动画
mainScroll();

//  发现最爱
function discover(){  
    var arr = [];
    var num = null; 
    $('.dis_info li').each(function(i,el){
        arr.push({
            top:$('.dis_info img').eq(i).css('top'),
            width:$('.dis_info img').eq(i).css('width'),
            height:$('.dis_info img').eq(i).css('height'),
            left:$('.dis_info img').eq(i).css('left'),
            opacity:$('.dis_info img').eq(i).css('opacity'),
        })    
        $(el).on('mouseenter',function(){
            num = num + i; 
            $(this).addClass('active').siblings().removeClass('active');         
            if (!(i == 0 && num == 0)) {
                if (num > 0) {
                    arr.push(arr.shift(arr[i]));
                } else {
                    arr.unshift(arr.pop(arr[i]));
                }                
                $('.dis_info img').each(function(i,el){
                    $(el).animate(arr[i],1000);               
                })
            } 
        })
        $(el).on('mouseleave',function(){
            num = - i;
        })
    })   
}

//  首页主体滚动
function mainScroll(){
    wheel(document,function(){},function(){
        var h = window.innerHeight;
        $('.main>div').each(function(i,el){
           if (el.getBoundingClientRect().top-100 <= h ) {
               $(this).addClass('move');
           }
        })
    })
}