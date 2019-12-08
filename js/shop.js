//  顶部滚动标签
scroll();

//  判断用户是否登录
user(false);

//  点击弹出搜索框
search();

//  全选
allCheck()

function allCheck(){
    $('.all').removeClass('icon_checkout').addClass('icon_checkin');
    $('.item .first span').removeClass('icon_checkout').addClass('icon_checkin');
    check();
    $('.all').on('click',function(){        
        if ($(this).attr('class').indexOf('icon_checkin') == -1){
            $(this).removeClass('icon_checkout').addClass('icon_checkin');
            $('.item .first span').removeClass('icon_checkout').addClass('icon_checkin');
            check();
        } else {
            $(this).removeClass('icon_checkin').addClass('icon_checkout');
            $('.item .first span').removeClass('icon_checkin').addClass('icon_checkout');
            check();
        }
    })
    $('.first span').on('click',function(){
        if ($(this).attr('class').indexOf('icon_checkin') == -1){
            $(this).removeClass('icon_checkout').addClass('icon_checkin');
            // console.log(check())
            if (check()){
                $('.all').removeClass('icon_checkout').addClass('icon_checkin');
            }
        } else {
            $(this).removeClass('icon_checkin').addClass('icon_checkout');
            check()
            $('.all').removeClass('icon_checkin').addClass('icon_checkout');
        }
    })
    function check(){
        var num = 0;
        var allnum = 0;
        var allprice = 0;
        $('.first span').each(function(i,el){
            if ($(el).attr('class').indexOf('icon_checkout') == -1){
                num ++;                
                allnum += parseInt($('.num').eq(i).html());
                allprice += parseInt($('.price').eq(i).html().substring(1))
            }
        })
       $('.allnum').html(allnum + '件已选')
       $('.allprice').html('￥'+allprice+'.00')
        if (num == 3){
            return true;
        } else {
            return false;
        }
    }
}