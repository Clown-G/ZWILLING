//  公共 js


//  导航条顶部滚动
function scroll(){
    var num = 0;
    moveP();
    setInterval(function(){
        moveP();
    },4000)
    function moveP(){
       var ps = $('.scroll p');
        num ++;
        num = num >= ps.length?0:num;
        ps.eq(num).animate({
            top:'0px'
        },1000,'linear',function(){
            setTimeout(function(){
                ps.eq(num).animate({
                    top:'-35px'
                },1000,function(){
                    ps.eq(num-1).css('top','35px')
                })
            },2000)
        })
    }
}
//  电话正则
function regTel(tel){      
    return res = /^1[3-9]\d{9}$/.test(tel);
}
//  密码正则
function regPass(password){      
    return res = /^\w{8,16}$/.test(password);
}

//  商品详情页产品介绍
// function introImg(){
//    console.log(itemInfo);
//    $('.intro_img').html(itemInfo.description);
// }
