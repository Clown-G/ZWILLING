//  导航条滚动
scroll();
//  验证电话号码是否正确
$('#tel').on('change',function(){    
    if (!regTel($(this).val())) {
         alert('您输入的手机号格式错误');    
    } else {
        res = storage.get('userInfo');        
        $.each(res,function(data){            
            if (res[data].user == $('#tel').val()){
                alert('对不起，您输入的账户已注册');
            }
        })        
    }    
})
//  点击下一步设置密码
$('.next').on('click',function(){
    $(this).parents('.reister_info').addClass('hidden').next().removeClass('hidden');
})
//  验证密码
$('#password').on('change',function(){    
    var res = regPass($(this).val());
    if (!res) {
        alert('您输入的密码应为8-16位的数字，字母,下划线');    
    }
})
//  验证两次密码是否一致
$('#repass').on('change',function(){    
    if ($(this).val() !== $('#password').val()) {
        alert('两次输入的密码不一致');    
    }
})

//  将用户信息存入 localstorage 中
$('.submit').on('click',function(){
    var res = storage.get('userInfo');     
    res.push({
        user:$('#tel').val(),
        password:$('#password').val()
    });     
    storage.set('userInfo',res);
    session.set('user',$('#tel').val());
    user(true);  
})