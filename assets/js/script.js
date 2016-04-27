$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  
   $(".nav-text").hover(function(){
    $(this).css("background-color", "white");
    }, function(){
    $(this).css("background-color", "#c0c0c0");
});



  $("#submit-fade").click(function() { $("go-away").fadeOut(1000);});




  $('#sidebar-button').click(function() { 
    if ($(this).hasClass('button-active')) {
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('button-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    } 
  
  else { 
    $('#sidebar-button').addClass('button-active');
    $('.sidebar-container').addClass('sidebar-active');
    $('.page-wrapper').addClass('wrapper-active');
    setTimeout(function() {
      $('body').addClass('no-scroll');
      }, 300);  
    }
  }); 



  // QUESTION 7

$('.page-wrapper').click(function() { 
    if ($(this).hasClass('wrapper-active')) {
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
      $('#sidebar-button').removeClass('button-active');
      setTimeout(function() {
      $('body').removeClass('no-scroll');
      }, 300);
    }
  }); 

  // QUESTION 8

$('#carousel-next').click(function() {
    var marginval = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (marginval === -3840) { 
      return false;
    }

    else {
      $('#carousel').css('margin-left', marginval - 960)
    }
}); 


//   //Implement the "slide to right" when the user clicks on #carousel-prev here


$('#carousel-prev').click(function() {
    var marginval = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (marginval === 0) { 
      return false;
    }

    else {
      $('#carousel').css('margin-left', marginval + 960)
    }
}); 

// $('carousel-prev').click(function() {
//     var marginval = parseInt($('#carousel').css('margin-left').replace("px", ""));

// (When the user clicks on an the carousel-prev button)
// Get the margin left value of the carousel and store it in a variable
// If the current margin is equal to 0 (i.e. we are at the beginning)
// if (marginval === 0) {

// }
// return 
// Otherwise:
// Update the margin-left of the carousel to be the current margin + 960

  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});