//Creating a Validation requirements for Delivery Location form.
window.addEventListener("load", validate);
function validate() {
    let myform = document.getElementById("deliveryInfo").elements;
    let orderStart = document.getElementById('startPizza');
    orderStart.addEventListener("click", () => {
        for(i = 0; i < myform.length; i++){
            if (myform[i].value == ""){
                alert("Missing require information!");
            }
        }
    });
}
