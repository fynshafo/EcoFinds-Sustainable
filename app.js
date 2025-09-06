// ---------- User Auth ----------
function signup() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let users = JSON.parse(localStorage.getItem('users')) || [];
  
  if (users.find(u => u.email === email)) {
    alert("User already exists!");
    return;
  }
  users.push({ email, password, username: email.split('@')[0] });
  localStorage.setItem('users', JSON.stringify(users));
  alert("Signup successful! Please log in.");
}

function login() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let users = JSON.parse(localStorage.getItem('users')) || [];
  
  let user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', email);
    location.href = "home.html";
  } else {
    alert("Invalid credentials!");
  }
}
