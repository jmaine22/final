//Creating a Validation requirements for Delivery Location form.
window.addEventListener("load", validate);
function validate() {
    let myform = document.getElementById("deliveryInfo").elements;
    let orderStart = document.getElementById('startPizza');
    orderStart.addEventListener("click", (e) => {
        for(i = 0; i < myform.length; i++){
            if (myform[i].validity){
                document.getElementById('startPizza').tabIndex = -1;
                e.preventDefault();
                //alert("Missing require information!");
                let myInput = myform[i];
                console.log(myInput);
                //myInput.setCustomValidity('You need to fill this out');
                // input.reportValidity();
            }
        }
    });
}
