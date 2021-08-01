//小塚ゴシック
(function(d) {
    var config = {
        kitId: 'vmm1jiv',
        scriptTimeout: 3000,
        async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
//フェードインアニメーション
$(function(){
    $(window).scroll(function (){
        $('.js-fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('is-fadein--open');
            }
        });
    });
});
//ページトップリンク
$(function(){
    var top = $(".js-page-top-trigger");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(top).addClass("is-page-top--done");
        } else {
            $(top).removeClass("is-page-top--done");
        }
    });
    top.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
//リンククリック時のアニメーション
$(window).on('load', function(){
    $('.is-body-fade').removeClass('is-body-fade--out');
});
$(function() {
    $('a:not([href^="#"]):not([target])').on('click', function(e){
        e.preventDefault();
        url = $(this).attr('href');
    if (url !== '') {
        $('.is-body-fade').addClass('is-body-fade--out');
        setTimeout(function(){
            window.location = url;
        }, 600);
    }
    return false;
    });
});
//swiper
new HeroSlider('.swiper-container');
//ハンバーガーメニュー
new Hamburger();