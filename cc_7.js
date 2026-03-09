const input = document.getElementById("cookieOrder");
const button = document.getElementById("orderButton");
const headline = document.getElementById("PlaceOrderHeadline");

button.addEventListener("click", function() {
    const orderText = input.value;

    if (orderText !== "") {
        headline.textContent = orderText;
    }
})