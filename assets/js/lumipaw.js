const products = [
    {
        name: "AquaPaws",
        price: "$25,000",
        description: "Jabón que limpia y refresca.",
        image: "assets/images/AquaPaws.jpg",
    },
    {
        name: "EcoFur",
        price: "$25,000",
        description: "Jabón ecológico para mascotas.",
        image: "assets/images/EcoFur.jpg",
    },
    {
        name: "HerbaWash",
        price: "$25,000",
        description: "Jabón herbal para un pelaje suave.",
        image: "assets/images/HerbaWash.jpg",
    },
    {
        name: "LumiFresh",
        price: "$25,000",
        description: "Jabón que deja un aroma fresco.",
        image: "assets/images/LumiFresh.jpg",
    },
    {
        name: "NaturePaw",
        price: "$25,000",
        description: "Jabón natural para todo tipo de piel.",
        image: "assets/images/NaturePaw.jpg",
    },
];

document.getElementById("product-select").addEventListener("change", function() {
    const selectedProduct = products[this.value - 1];
    if (selectedProduct) {
        document.getElementById("product-name").innerText = selectedProduct.name;
        document.getElementById("product-price").innerText = selectedProduct.price;
        document.getElementById("product-description").innerText = selectedProduct.description;
        document.getElementById("product-image").src = selectedProduct.image;
        document.getElementById("total-price").innerText = selectedProduct.price;
    } else {
        // Resetea los valores si no se selecciona un producto válido
        document.getElementById("product-name").innerText = "Selecciona un Jabón";
        document.getElementById("product-price").innerText = "";
        document.getElementById("product-description").innerText = "";
        document.getElementById("product-image").src = "assets/images/single-product-01.jpg"; // Imagen por defecto
        document.getElementById("total-price").innerText = "";
    }
});