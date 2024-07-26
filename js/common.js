$(function(){

    $('.banner .text #extra').on("click",function(){
        // e.preventDefault();
         $(".banner .text #hide").slideToggle()
     })
    
      
        $('.wrap-7 .bt-1').on("click",function(){
             $(".wrap-7 .col-6:nth-child(3),.col-6:nth-child(4)").slideToggle()
    
        });
      $('.accordian .bt-2').on("click",function(e){
         e.preventDefault();
         if( $(this).hasClass(".active")){
        
         }
         else{
          $(".accordian .bt-2").removeClass(".active")
          $(".accordian p").slideUp()
          $(this).next("p").slideDown()
          $(this).addClass(".active")
         }
      })
      $(".wrap-1 .btn-mob").click(function(){
        $(this).toggleClass("active");
            $(".wrap-2 .nav-bar .links-1").slideToggle();
    
        });
       
    
})