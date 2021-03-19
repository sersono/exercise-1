//한개 나오는 메뉴


//$("nav > ul > li").mouseover(function(){
//    $(this).find("ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//   $(this).find("ul.sub").stop().slideUp(200);
//});







//메뉴 부분 전체

//$("nav > ul > li").mouseover(function(){
//    $("ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//    $("ul.sub").stop().slideUp(200);
//});




$("nav > ul > li").mouseover(function(){
    $(".nav_bg, ul.sub").stop().slideDown(200);
});
$("nav > ul > li").mouseout(function(){
    $(".nav_bg, ul.sub").stop().slideUp(200);
});




//메뉴 부분 브라우저 전체

//$("nav > ul > li").mouseover(function(){
//    $(".nav_bg, ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//    $(".nav_bg, ul.sub").stop().slideUp(200);
//});


//bx슬라이더

            $(document).ready(function() {
                $('.slider').bxSlider({
                    auto: true, // 자동으로 애니메이션 시작
                    speed: 900, // 애니메이션 속도
                    pause: 5000, // 애니메이션 유지 시간 (1000은 1초)
                    mode: 'fade', // 슬라이드 모드 ('fade', 'horizontal', 'vertical')
                    pager: true, // 페이지 표시 보여짐
                    captions: true, // 이미지 위에 텍스트를 넣을 수 있음
                    controls: false,
                });
            });



//탭

    $(".cont_1 h5").click(function () {
        $(".cont_1 h5,.cont_1 ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });







