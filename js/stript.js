$(function(){
  //nav
  $("header").mouseover(function(){
    $(".headerhelper , nav>ul>li>ul").stop().slideDown()
  })
  $("header").mouseleave(function(){
    $(".headerhelper , nav>ul>li>ul").stop().slideUp()
  })

  $("nav>ul>li>a").mouseover(function(){
    // console.log(1)
    $("nav>ul>li>a").removeClass("active")
    $(this).addClass("active")
  })
  $("nav>ul>li>a").mouseleave(function(){
    $("nav>ul>li>a").removeClass("active")
  })
  $("nav>ul>li>ul>li>a").mouseover(function(){
    $("nav>ul>li>ul>li>a").removeClass("active")
    $(this).addClass("active")
    $(this).parent().parent().prev().addClass("active")
  })
  $("nav>ul>li>ul>li>a").mouseleave(function(){
    $("nav>ul>li>ul>li>a").removeClass("active")
    $("nav>ul>li>a").removeClass("active")
  })

})


//슬라이드
$(function(){
  //변수들 모음
  let i =0;
  const j = $(".slider>ul>li").length; //4
  $(".curnum").text("0"+1)              //첫슬라 번호
  $(".fullnum").text("/"+"0"+j)         //04
  $(".barev .bar").animate({width: "100%"},3000)
  let bar = document.querySelector(".bar");
  
  //슬라이드 구현
  function slide (){
    i++;
    bar.style.width='0' 
    $(".slider>ul>li").hide()
    $(".slider>ul>li").eq(i%j).fadeIn()   //나머지를 인수로 받아서 보여주기
    $(".curnum").text("0"+(i%j +1));            //나머지를 인수로 받아서 번호 매기기
    bar.animate({width: "100%"},3000)
  };

  //기능(정지)
  let k=0;
  let aa = setInterval( slide,3000 );
  $(".slidebar-nav .playstop").click(function(){
    k++;
    $(".slidebar-nav .playstop>a").removeClass("active");
    $(".slidebar-nav .playstop>a").eq(k%2).addClass("active");
    if((k%2)==1){ clearInterval(aa) }
    else { aa=setInterval(slide,3000)}
  })


})