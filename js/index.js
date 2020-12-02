window.addEventListener('load',function() {
    var bodyEle = document.body;
    var zeta = document.querySelector('.zeta');
    var zim = document.querySelector('.zim');
    var bot = document.querySelector('.bot');
    var buildTime = document.querySelector('.build_time');
    // 1.泽塔
    zeta.addEventListener('click', function() {
        this.style.height = '0';
    });

    // 进入网页字体变色
    zim.style.opacity = '1';
    bot.style.opacity = '1';
    buildTime.style.opacity = '1';

    // 通过修改字体透明度 在网页下滑时让字符显示 / 隐藏
    // 滑动变色函数封装
    function colorChange(obj, target){
        var opaPara = 1-(scrollY-target)*0.02;
        obj.style.transition = 'none';
        obj.style.opacity = opaPara;
    }
    //  网页滑动字体颜色变化
    window.addEventListener('scroll',function() {
        colorChange(zim, 220);
        colorChange(bot, 285);
        colorChange(buildTime, 550);
    })


})