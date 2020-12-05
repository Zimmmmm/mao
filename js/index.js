(function() {
        window.addEventListener('load',function() {
        var zim = document.querySelector('.zim');
        var bot = document.querySelector('.bot');
        var buildTime = document.querySelector('.build_time');
        var deta = document.querySelector('.deta');
        var intro = document.querySelector('.intro');
        var deviceH = document.documentElement.clientHeight;

        // 进入网页字体变色
        deta.style.opacity = '1';
        setTimeout(function(){
            zim.style.opacity = '1';
            bot.style.opacity = '1';
            buildTime.style.opacity = '1';
        },500);

        // 通过修改字体透明度 在网页下滑时让字符显示 / 隐藏
        // 页面下滑元素透明度变化函数封装
        // flag true 显示 false 隐藏
        function colorChange(obj, target, v, flag){
            var opaPara = undefined;
            if(flag){
                opaPara = (scrollY-target)/deviceH*v;
            }else {
                opaPara = 1-(scrollY-target)/deviceH*v;
            }
            obj.style.transition = 'none';
            obj.style.opacity = opaPara;
        };

        // 页面下滑抽屉效果
        // flag true 上抽  false下抽
        function eleDrag(obj, target, flag){
            if(flag){
                obj.style.top = (target-scrollY)/deviceH*100 + 'vh';
            }else {
                obj.style.top = (target+scrollY)/deviceH*100 + 'vh';
            }
            console.log((target+scrollY)/deviceH);
            obj.style.transition = 'none';
        };

        console.log(deviceH);
        //  网页滑动字体颜色变化
        window.addEventListener('scroll',function() {
            colorChange(zim, 250, 15, false);
            colorChange(bot, 310, 15, false);
            colorChange(buildTime, 475, 15, false);
            colorChange(deta, 0, 3, false);
            colorChange(intro, 550, 6, true);
            // 元素抽屉
            eleDrag(deta, 0, true);
            (function() {
                if(scrollY >= 0.2*deviceH && scrollY <= deviceH){
                    intro.style.top =  (scrollY/deviceH - 0.8)*100 + 'vh';
                }
            })();
        });
    });
})();