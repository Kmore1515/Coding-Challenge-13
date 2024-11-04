
const errorMessage = document.getElementById("error-message");
const productContainer = document.getElementById("product-container");

let grabProducts = () => {
    fetch("https://www.course-api.com/javascript-store-products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); 
    })
    .then(products => {
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
        console.error("Fetch operation unsuccessful", error);
        errorMessage.textContent = "Unsuccessful, Please try again.";
    });
};
grabProducts();