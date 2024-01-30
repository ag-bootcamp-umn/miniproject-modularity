const form = document.querySelector('form');
const fname = form.fname;
const lname = form.lname;
const email = form.email;

form.addEventListener("submit", async function(event) {
  // gather up the form data
  event.preventDefault();

  const resp = await fetch("/api/customer", {
    method: "POST",
    body: JSON.stringify({
      fname: fname.value,
      lname: lname.value,
      email: email.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  fname.value = '';
  lname.value = '';
  email.value = '';
})