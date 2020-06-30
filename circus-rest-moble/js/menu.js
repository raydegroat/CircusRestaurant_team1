
/// <reference path="jquery-3.5.1.js" />

     $(document).ready(function(){

        //  Variable to hold counter to register the quantity of menu items for order
        let wheelCounter = ('<input type="number" id="quantity" name="quantity" min="1" max="10" style="width: 30px" value="1" >');
        
        let totalCost = 0;

        jQuery('.dish').click(function(){    /* When name is clicked, it will be added to the orderUp list*/
            $("#orderUp").append('<li>'+wheelCounter+ $(this.firstElementChild).text()+'</li>');
            $("#yourOrder").append('<tr><td>'+wheelCounter+'</td><td>'+$(this.firstElementChild).text()+'</td><td>'
            + $(this.lastElementChild).text()+'</td></tr>')
            totalCost += parseInt($(this.lastElementChild).text());
            console.log($(this).text());
            console.log(totalCost);
        });

        console.log(wheelCounter.value)
        
        jQuery("#placeorder").click(function(){  /* Hide the order button and notify user that the order was received */
            $(this).hide();
            alert("Thank you for your order! Your total is: "+ totalCost + " :-");
            $("#yourOrder").empty();
            $("#orderInstructions").replaceWith("<h4>Thank you! Your order is on it's way!</h4> <p> Your total is: "
            + totalCost +" SEK </p>");

        })
    });

