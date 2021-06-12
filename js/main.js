//Creating a Validation requirements for Delivery Location form.
function validate() {
    const msg = () => {
        alert("Missing require information!");
    }
    let myform = document.getElementById('deliveryInfo').required = true;
    let orderStart = document.getElementById('startPizza');
    document.addEventListener("DOMContentLoaded", () => {
        orderStart.addEventListener("click", myform);
        if(myform == false) {
            msg;
        }
    });
}