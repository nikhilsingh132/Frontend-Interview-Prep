// A Callback Is Called Too Many Times

// This happens when the function you gave your callback to is either buggy 
// or malicious and invokes your callback more than once. This can be disastrous 
// in many applications.

// Imagine a payment API that takes onSuccess and onFailure callbacks.

// The Problem in Action 💸

// Let's say a buggy processPaymentAPI calls the success callback in a loop.

// A buggy third-party API
function processPaymentAPI(paymentInfo, onSuccess) {
    console.log("Processing payment...");
    // Bug: It calls onSuccess three times!
    for (let i = 0; i < 3; i++) {
        onSuccess("txn_12345");
    }
}

// Your code that uses the API
function completeOrder(transactionId) {
    console.log(`Order complete! Transaction ID: ${transactionId}.`);
    // In a real app, this might charge a credit card or create a database entry.
}

// You expect completeOrder to be called ONCE.
processPaymentAPI({ amount: 100 }, completeOrder);

// Because you inverted control, the buggy API was able to charge the user multiple 
// times. You trusted it to call your function once, and it didn't.