// script.js — light client logic for demo
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Simulated form submit (replace action with server endpoint)
  const form = document.getElementById('registerForm');
  const msg = document.getElementById('formMessage');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.textContent = 'Submitting...';
    const data = new FormData(form);
    // Basic validation
    if (!data.get('fullname') || !data.get('email') || !data.get('phone') || !data.get('course')) {
      msg.textContent = 'Please complete required fields.';
      return;
    }

    fetch('http://localhost:5000/api/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fullName: data.get('fullname'),
    email: data.get('email'),
    phone: data.get('phone'),
    location: data.get('location'),
    course: data.get('course'),
    payment: data.get('payment'),
    note: data.get('note')
  })
})
.then(res => res.json())
.then(response => {
  msg.style.color = '#A7F3D0';
  msg.textContent = response.message || 'Registration successful!';
  form.reset();
})
.catch(() => {
  msg.style.color = 'red';
  msg.textContent = 'Server error. Try again later.';
});
;
  });

  // Mock payment button -> replace with real gateway redirect logic
  document.getElementById('payMock').addEventListener('click', () => {
    // In production, open your payment gateway checkout (server-side)
    alert('Demo payment: integrate Stripe/Paystack/Flutterwave here for live payments.');
  });

  // Bank modal (upload)
  document.getElementById('payBankModal').addEventListener('click', () => {
    const confirmUpload = confirm('Have you completed a bank transfer? Click OK to open the upload page (demo).');
    if (confirmUpload) {
      // simulate redirect to 'upload proof' page
      window.location.href = '#register';
      document.getElementById('formMessage').textContent = 'If you paid by bank, please submit your proof in the registration form notes or reply to our email after registration.';
      document.getElementById('formMessage').style.color = '#A7F3D0';
      window.scrollTo({top:document.getElementById('register').offsetTop - 40, behavior:'smooth'});
    }
  });
});