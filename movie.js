const admin = [
  {
    name: "deepak",
    password: "deepak123",
  },
  {
    name: "dilip",
    password: "dilip123",
  },
  {
    name: "ankush",
    password: "ankush123",
  },
];

if (localStorage.getItem("madmin") == null) {
  localStorage.setItem("madmin", JSON.stringify(admin));
}

function startlogin(e) {
  e.preventDefault();

  const form = document.getElementById("login");

  const name = form.name.value;
  const pass = form.pass.value;

  const madmin = JSON.parse(localStorage.getItem("madmin"));

  for (let i = 0; i < madmin.length; i++) {
    let u = madmin[i].name;
    let p = madmin[i].password;

    if (u === name && p === pass) {
      window.location.href = "file.html";
      break;
    }
  }
}
