const msg = document.getElementById("msg");

const newTitle = document.getElementById("title");

const btntext = document.getElementById("btntext");

const toberemoved = document.getElementById("toberemoved");

const succes_msg = document.getElementById("succes_msg");

let value1 = "";
let value2 = "";

const myFunction1 = (val) => {
  value1 = val;
};
const myFunction2 = (val) => {
  value2 = val;
};

const checkPass = () => {
  if (value1 != value2) {
    msg.innerHTML = "Passwords do not match";
  } else {
    newTitle.textContent = "Password Changed";
    succes_msg.innerHTML =
      "Your password has been updated! Now get back " +
      "</br>" +
      "in the driver seat, racers are waiting for you!";

    btntext.textContent = "JOIN A RACE";
    toberemoved.innerHTML = "";
  }
};
