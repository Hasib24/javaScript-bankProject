console.clear();
const submitBtn = document.getElementById("submit"),
  userEmail = document.getElementById("user_email"),
  userPass = document.getElementById("user_pass");

// console.log(submitBtn, userEmail, userName);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userEmail.value === "abc@gmail.com" && userPass.value === "123"
    ? (window.location.href = "bank.html")
    : console.log(false);
});
