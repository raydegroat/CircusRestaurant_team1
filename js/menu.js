
/// <reference path="jquery-3.5.1.js" />

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
