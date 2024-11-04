
const errorMessage = document.getElementById("error-message"); // Grabbing error message from HTML
const productContainer = document.getElementById("product-container"); // Grabbing the product container from HTML

let grabProducts = () => {
    fetch("https://www.course-api.com/javascript-store-products") // Using fetch to grab the products from the URL
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok"); // Incase theres no response from the URL it throws an error message
        }
        return response.json(); 
    })
    .then(products => { // If successful it says the company name, product name and price
        products.forEach(product => {
            const listItem = document.createElement("li");
            const companyName = product.fields.company;
            const productPrice = product.fields.price;
            const productName = product.fields.price;
            const productImage = product.fields.image[0].url;

            listItem.innerHTML = `${companyName}<br>${productName}:$${productPrice}
            <img src="${productImage}" style="width: 60px; height: 60px;" />`;
            
            productContainer.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error("Fetch operation unsuccessful", error); // If not successful then it sets off an error to the user.
        errorMessage.textContent = "Unsuccessful, Please try again.";
    });
};
grabProducts();