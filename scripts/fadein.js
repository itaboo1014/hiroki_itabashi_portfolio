$(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 50){
            $(this).addClass('scrollin');
        }
    });
});

$(document).ready(function () {
    $(".head-return-btn").hide();　//ボタンを非表示にする
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) { //ページの上から100pxスクロールした時
            $(".head-return-btn").fadeIn("fast"); //ボタンがフェードインする
        } else {
            $(".head-return-btn").fadeOut("fast");　//ボタンがフェードアウトする
        }
        //scrollHeight = $(document).height(); //ドキュメントの高さ 
        //scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
        //footHeight = $("footer").innerHeight(); //止めたい位置の高さ(今回はfooter)
        //if (scrollHeight - scrollPosition <= footHeight) { //ドキュメントの高さと現在地の差がfooterの高さ以下の時
        //    $(".head-return-btn").css({
        //        "position": "absolute", //pisitionをabsoluteに変更
        //    });
        //} else { //それ以外の場合は
        //    $(".head-return-btn").css({
        //        "position": "fixed", //固定表示
        //    });
        //}
    });
    //スムーススクロール設定
    $('.head-return-btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);　//スムーススクロールの速度
        return false;
    });
});