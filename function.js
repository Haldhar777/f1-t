const newin = document.getElementsByClassName("newInput")[0].value;
const msg = document.getElementById("msg");

const checkPass = () => {
  console.log(newin);
  msg.innerHTML = newin;
};
