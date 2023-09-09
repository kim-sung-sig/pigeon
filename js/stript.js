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
  })
  $("nav>ul>li>ul>li>a").mouseleave(function(){
    $("nav>ul>li>ul>li>a").removeClass("active")
  })

})

$(function(){
  //slide
  let i =0;
  const j = $(".slider>ul>li").length; //4

  $(".curnum").text("0"+1)              //첫슬라 번호
  $(".fullnum").text("/"+"0"+j)         //04
  function slide (){
    i++;
    // console.log( $(".slider>ul>li").length)
    $(".slider>ul>li").fadeOut()
    $(".slider>ul>li").eq(i%j).fadeIn()   //나머지를 인수로 받아서 보여주기
    $(".curnum").text("0"+(i%j +1));            //나머지를 인수로 받아서 번호 매기기
  };
  setInterval(slide,4000)

})