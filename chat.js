// Define the virtual card class
class VirtualCard {
    constructor(cardNumber, cardHolder, expirationDate, cvv) {
      this.cardNumber = cardNumber;
      this.cardHolder = cardHolder;
      this.expirationDate = expirationDate;
      this.cvv = cvv;
    }
  
    // Implement any additional methods or functionality here
  }
  
  // Example usage
  const card = new VirtualCard("1234567890123456", "John Doe", "12/25", "123");
  
  // Define the online shop
  class OnlineShop {
    constructor() {
      this.items = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
        { id: 3, name: "Product 3", price: 30 }
      ];
    }
  
    // Display available items
    displayItems() {
      console.log("Available items:");
      this.items.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Price: $${item.price}`);
      });
    }
  
    // Process payment with a virtual card
    processPayment(itemID, card) {
      const selectedItem = this.items.find(item => item.id === itemID);
  
      if (selectedItem) {
        console.log(`Processing payment of $${selectedItem.price} for ${selectedItem.name}`);
        console.log(`Card number: ${card.cardNumber}`);
        console.log(`Card holder: ${card.cardHolder}`);
        console.log(`Expiration date: ${card.expirationDate}`);
        console.log(`CVV: ${card.cvv}`);
  
        // Additional payment processing logic can be added here
  
        console.log("Payment successful!");
      } else {
        console.log("Item not found.");
      }
    }
  }
  
  // Example usage
  const shop = new OnlineShop();
  shop.displayItems();
  
  const selectedItemId = 2; // Example: User selects item with ID 2
  shop.processPayment(selectedItemId, card);