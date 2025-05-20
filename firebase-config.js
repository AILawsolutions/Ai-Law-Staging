<script type="module">
  import { auth } from './firebase-config.js';
  import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

  const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => window.location.href = "index.html")
      .catch(error => document.getElementById("error").textContent = error.message);
  };

  const signup = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => window.location.href = "index.html")
      .catch(error => document.getElementById("error").textContent = error.message);
  };

  window.login = login;
  window.signup = signup;
</script>
