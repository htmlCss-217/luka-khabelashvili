document.getElementById('card-number').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value.replace(/(.{4})/g, '$1 ').trim(); 
    e.target.value = value;
});

document.getElementById('expiry-date').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
});

document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    const cardName = document.getElementById('card-name').value.trim();
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Invalid card number. Must be 16 digits.');
        return;
    }

    if (!/^[A-Za-z ]+$/.test(cardName)) {
        alert('Invalid cardholder name.');
        return;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        alert('Invalid expiry date. Format MM/YY');
        return;
    }

    if (!/^\d{3}$/.test(cvv)) {
        alert('Invalid CVV. Must be 3 digits.');
        return;
    }

    alert('Payment Successful!');
});
