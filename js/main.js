function postMessage(msg, myYes) {
  let confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function () {
    confirmBox.hide();
  });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}

$(document).ready(function(){

  //  Variable to hold counter to register the quantity of menu items for order
  let wheelCounter = '<input type="number" id="quantity" name="quantity" min="1" max="10" style="width: 30px" value="1" >';
                  

      jQuery('.name').click(function(){
          $("#order").append(wheelCounter+' '+ $(this).text()+'<br>');
         console.log($(this).text());
      });

      jQuery("#placeorder").click(function(){
          alert("Thank you for your order!");
      })
  });

/*window.onscroll = function () { myFunction() };

var navbar = document.getElementById("mynavbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/

/*$(window).bind('scroll', function () {
    if ($(window).scrollTop()) {
        $('#mynavbar').addClass('sticky');
    } else {
        $('#mynavbar').removeClass('sticky');
    }
});*/