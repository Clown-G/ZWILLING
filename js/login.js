scroll();
//  点击登录验证
$('#submit').on('click',function(){   
    var arr = storage.get('userInfo');
    console.log(arr)
    $.each(arr,function(data){       
        if (arr[data].user === $('#tel').val() && arr[data].password === $('#password').val() ) {
            session.set('user',$('#tel').val());
            user(true);
        } else {
           $('.login_info .msg_block').removeClass('hidden');
        }
    })
})
//  输入账户时让错误提示消失
$('#tel').on('focus',function(){
    $('.login_info .msg_block').addClass('hidden');
})