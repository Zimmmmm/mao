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
    zim.style.color = 'white';
    bot.style.color = 'white';
    buildTime.style.color = 'white';

    // 网页下滑字体变色
    // 滑动变色函数封装
    function colorChange(obj, target){
        var rgbPara = 255-(scrollY-target)*5.1;
        obj.style.transition = 'none';
        obj.style.color = 'rgb(' + rgbPara + ','+ rgbPara + ','+ rgbPara + ')'
    }
    //  网页滑动字体颜色变化
    window.addEventListener('scroll',function() {
        colorChange(zim, 220);
        colorChange(bot, 285);
        colorChange(buildTime, 550);
    })


})