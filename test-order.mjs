import fetch from 'node-fetch';

const res = await fetch('http://localhost:3000/api/order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    orderReference: "VT-123456",
    customerName: "Test User",
    customerEmail: "test@example.com",
    paymentMethod: "card",
    items: [],
    subtotal: 0,
    shipping: 0,
    total: 0
  })
});

const text = await res.text();
console.log('Status:', res.status);
console.log('Body:', text);
