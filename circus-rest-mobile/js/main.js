/*function postMessage(msg, myYes) {
  let confirmBox = $("#confirm");
  confirmBox.find(".message").text(msg);
  confirmBox.find(".yes").unbind().click(function () {
    confirmBox.hide();
  });
  confirmBox.find(".yes").click(myYes);
  confirmBox.show();
}

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("mynavbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(window).bind('scroll', function () {
    if ($(window).scrollTop()) {
        $('#mynavbar').addClass('sticky');
    } else {
        $('#mynavbar').removeClass('sticky');
    }
});*/