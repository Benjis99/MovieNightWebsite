function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
let firstName;
let lastName;
let email;

function checkLoginMethod() {
  firstName = document.getElementById("first").value;
  lastName = document.getElementById("second").value;
  email = document.getElementById("mail").value;
  if (!isNaN(firstName)) {
    alert("Bruh try again");
  } else if (!isNaN(lastName)) {
    alert("Bruh try again");
  } else if (isNaN(firstName) || isNaN(lastName)) {
    createAccount();
  }

  console.log(firstName, lastName, email);
}

function createAccount() {
  alert(
    `Your account was successfully created: ${firstName} ${lastName} ${email}`
  );
}
