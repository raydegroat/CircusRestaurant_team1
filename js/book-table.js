function postMessage(msg, myYes){
   let confirmBox = $("#confirm");
            confirmBox.find(".message").text(msg);
            confirmBox.find(".yes").unbind().click(function() {
               confirmBox.hide();
            });
            confirmBox.find(".yes").click(myYes);
            confirmBox.show();
}
function disableDates(){
const validate = dateString => {
   const day = (new Date(dateString)).getDay();
   if (day==0 || day==6) {
     return false;
   }
   return true;
 }
}