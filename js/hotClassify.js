//  顶部滚动标签
scroll();

//  判断用户是否登录
user(false);

//  点击弹出搜索框
search();

//  渲染页面
window.onload = function(){    
    var data = jsonData.hotClassify[0][location.search.substring(1)];
    var num = location.hash.substring(1);   
    if (num) { 
        // console.log(data[num][2]);   
        //  渲染标题     
        $('.title').prepend($('<h2>').html(data[num][0].data.title));
        if ( location.search.substring(1) == 'find') {
            $('.title').append($('<img>').attr('src',data[num][1].data.image.background_pc));
        } 
        // 遍历渲染内容       
        $.each(data[num],function(i,data){
            if (i>=2) {                
                var str = `<div class="wares">
                                <div>
                                    <a href="${data.data.url}">
                                        <img _src="${data.data.background_pc}" alt="">
                                    </a>
                                </div>
                                <div>
                                    <a href="${data.data.url}">
                                        <p>${data.data.title}</p>
                                        <h5>${data.data.subtitle}</h5>
                                    </a>
                                    <p>${data.data.subtitle2}</p>
                                    <a href="${data.data.url}">查看详情<span class="icon icon_more_r"></span></a>
                                </div>
                            </div>` 
                $('.wares_list').append(str);                               
            } 
        })
        lazyLode();
        wheel(document,function(){},function(){
            lazyLode();
        })
        //  页面懒加载
        function lazyLode() {
            $('.wares_list img').each(function(i,el){
                var h = window.innerHeight;
                if (el.getBoundingClientRect().top <= h ) {
                    $(el).attr('src',$(el).attr('_src'));
                }
            });
        }
        $('.wares').each(function(i,el){
            if ((i+1)%3 == 0) {
                $(this).css('border','none')
            }
        })
    } else {
        window.location.href = 'hotClassify.html?find#1';
              
    }
}
