$(function(){
  //nav
  $("header").mouseover(function(){
    $(".headerhelper , nav>ul>li>ul").stop().slideDown()
  })
  $("header").mouseleave(function(){
    $(".headerhelper , nav>ul>li>ul").stop().slideUp()
  })
})

$(function(){
  //slide
  let i =0;
  $(".curnum").text("0"+1)
  $(".fullnum").text("/"+"0"+$(".slider>ul>li").length)
  function slide (){
    i++;
    console.log( $(".slider>ul>li").length )
    $(".slider>ul>li").fadeOut("fast",'linear')
    $(".slider>ul>li").eq(i%($(".slider>ul>li").length)).fadeIn("fast",'linear')
    $(".curnum").text("0"+((i)%($(".slider>ul>li").length) +1));
  }
  setInterval(slide,4000)

})