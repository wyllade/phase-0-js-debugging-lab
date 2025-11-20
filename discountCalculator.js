function calculateDiscountedPrice(quantity, pricePerItem) {

    debugger; 

    let totalPrice = 0;

    for (let i = 0; i < quantity; i++) {  
        totalPrice += pricePerItem;
    }

    debugger; 
    
    if (quantity >= 10) {
        totalPrice = totalPrice * 0.9; // 10% discount
    }

    debugger; // Inspect final result

    return totalPrice;
}

module.exports = calculateDiscountedPrice;
