console.log("--- Initializing Inventory System ---");

// 1. Data and Input Initialization
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

let productName = prompt("Enter product name:");

if (productName === null || productName.trim() === "") {
    console.log("Invalid product name. Using default: Monitor");
    productName = "Monitor";
}

let productPrice = Number(prompt("Enter product price:"));

if (Number.isNaN(productPrice) || productPrice <= 0) {
    console.log("Invalid price. Using default: $150");
    productPrice = 150;
}

// 2. Control Flow and Category Assignment
function getCategory(price) {
    if (price < 100) {
        return "Budget";
    } else if (price >= 500) {
        return "Premium";
    } else {
        return "Standard";
    }
}

function validateCategory(category) {
    switch (category) {
        case "Budget":
            return "Budget";
        case "Standard":
            return "Standard";
        case "Premium":
            return "Premium";
        default:
            return "Unknown";
    }
}

// Add the new product
inventory.push({
    name: productName.trim(),
    price: productPrice
});

// 3. Process Inventory Using Loops
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(product => {
    let category = getCategory(product.price);
    category = validateCategory(category);

    console.log(
        `* Item: ${product.name} ($${product.price}) -> Category: ${category}`
    );
});

// Demonstrate continue and break
for (let i = 0; i < inventory.length; i++) {
    if (!inventory[i].name || inventory[i].price <= 0) {
        continue;
    }

    if (inventory[i].name === productName.trim()) {
        break;
    }
}

// 4. Functions and Financial Analytics
function calculateTotal(items) {
    let total = 0;

    items.forEach(item => {
        total += item.price;
    });

    return total;
}

// Arrow function with tax and discount parameters
const calculateFinalAmount = (
    amount,
    taxRate = 0,
    discountRate = 0
) => {
    const discountedAmount = amount * (1 - discountRate / 100);
    const finalAmount = discountedAmount * (1 + taxRate / 100);

    return finalAmount;
};

// 5. Array Methods and Final Reports
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const affordableItems = inventory.filter(
    product => product.price < 200
);

const affordableNames = affordableItems.map(product => product.name);

console.log(
    "Filtered Affordable Items (Under $200):",
    JSON.stringify(affordableNames)
);

const formattedReport = inventory.map(
    product => `${product.name.toUpperCase()}: $${product.price}`
);

console.log(
    "Formatted Report List:",
    JSON.stringify(formattedReport)
);

// Example: Apply 10% tax and 5% discount to the inventory value
const finalAmount = calculateFinalAmount(totalValue, 10, 5);

console.log(`Total After 5% Discount and 10% Tax: $${finalAmount.toFixed(2)}`);