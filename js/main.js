//Creating a Validation requirements for Delivery Location form.
window.addEventListener("load", validate);
function validate() {
    let myform = document.getElementById("deliveryInfo").elements;
    let orderStart = document.getElementById('startPizza');
    jQuery(document).ready(function ($) {
        $(orderStart).removeClass('disabled');
    });
    orderStart.addEventListener("click", (e) => {
        for(i = 0; i < myform.length; i++){
            if (myform[i].validity){
                jQuery(document).ready(function ($) {
                    $(orderStart).addClass('disabled');
                });
                //alert("Missing require information!");
                //myInput.setCustomValidity('You need to fill this out');
                // input.reportValidity();
            }
            else {
                
            }
        }
    });
}
