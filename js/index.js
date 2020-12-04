window.addEventListener('load',function() {
    var zim = document.querySelector('.zim');
    var bot = document.querySelector('.bot');
    var buildTime = document.querySelector('.build_time');
    var deta = document.querySelector('.deta');
    var intro = document.querySelector('.intro');

    // 进入网页字体变色
    deta.style.opacity = '1';
    setTimeout(function(){
        zim.style.opacity = '1';
        bot.style.opacity = '1';
        buildTime.style.opacity = '1';
        
    },500);

    // 通过修改字体透明度 在网页下滑时让字符显示 / 隐藏
    // 页面下滑元素透明度变化函数封装
    function colorChange(obj, target, v){
        var opaPara = 1-(scrollY-target)*v;
        obj.style.transition = 'none';
        obj.style.opacity = opaPara;
    }

    // 页面下滑抽屉效果
    function eleDrag(obj){
        obj.style.transition = 'none';
        obj.style.top = target - scrollY + 'px';
        obj.style.top = target + scrollY + 'px';
    }

    //  网页滑动字体颜色变化
    window.addEventListener('scroll',function() {
        colorChange(zim, 220, 0.02);
        colorChange(bot, 285, 0.02);
        colorChange(buildTime, 550, 0.02);
        colorChange(deta,0, 0.0023);
        // 元素抽屉
        (function() {
            deta.style.top = -scrollY + 'px';
        })();
        
        (function() {
            if(scrollY >= 500 && scrollY <= 900)
            {
                intro.style.top =  scrollY - 750 + 'px';
            }
        })();
    
        
    })


})