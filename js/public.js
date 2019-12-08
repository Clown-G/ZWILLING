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

//  判断用户是否登录
function user(onoff){      
    res = session.get('user');    
    if (res.length !== 0) {
        $('.login_info .hidden').removeClass('hidden').prev().addClass('hidden');
        $('.login_info .in a').html('用户' + res.substr(0,3) + "****" + res.substr(7));
        if (onoff) {
            window.location.assign('../index.html');
        }
    }
}

//  点击搜索弹出搜索框
function search(){
    $('.nav_search a').on('click',function(){
        $('.search_box').removeClass('hidden');
    })
    $('.nav_search .icon_cancel').on('click',function(){
        $('.search_box').addClass('hidden');
    })
}

//  轮播图
function banner(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }, 
        autoplay:true,    
    })  
}
//  商品详情页产品介绍
// function introImg(){
//    console.log(itemInfo);
//    $('.intro_img').html(itemInfo.description);
// }
