
/// <reference path="jquery-3.5.1.js" />

     $(document).ready(function(){

        //  Variable to hold counter to register the quantity of menu items for order
        let wheelCounter = '<input type="number" id="quantity" name="quantity" min="1" max="10" style="width: 30px" value="1" >';
                        

            jQuery('.name').click(function(){    /* When name is clicked, it will be added to the orderUp list*/
                $("#orderUp").append('<li>'+wheelCounter+ $(this).text()+'</li>');
            //    console.log($(this)); 
            });

            jQuery("#placeorder").click(function(){  /* Hide the order button and notify user that the order was received */
                $(this).hide();
                alert("Thank you for your order!");
                $("#orderUp").empty();
                $("#orderInstructions").replaceWith("<h4>Thank you! Your order is on it's way!</h4>")
            })
        });



