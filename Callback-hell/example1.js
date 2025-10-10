const cart = ["pant", "shirt", "watch"];

// api.createOrder()

// api.proceedToPayment()

// api.showOrderSummary()

// api.updateWallet()

// ProceedToPayment api to be called once order is created so we can create callback
// and pass proceedToPayment function as a callback to createOrder function and
// show orderSummary after payment is made and updateWallet after order summary is shown


//Code has started to grow horizontally instead of vertically
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
