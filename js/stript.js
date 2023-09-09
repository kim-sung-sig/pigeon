$(function(){


  //nav
  $("header").mouseover(function(){
    $(".headerhelper , nav>ul>li>ul").stop().slideDown()
  })
  $("header").mouseleave(function(){
    $(".headerhelper , nav>ul>li>ul").stop().slideUp()
  })
})