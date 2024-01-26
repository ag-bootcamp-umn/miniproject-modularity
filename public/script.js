form.addEventListener("submit", async function(event) {
  // gather up the form data

  const resp = await fetch("/api/customer", {
    method: "POST",
    body: JSON.stringify({
      id: req.body.id,
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
})