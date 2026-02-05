const emailInput = document.getElementById("email-input");
const nothing = document.querySelector(".nothing");
const nothing1 = document.querySelector(".nothing1");
const loichidan = document.querySelector(".loichidan");

document.getElementById("emailbutton").addEventListener("click", function (a) {
  a.preventDefault();
  if (emailInput.value === "lamntfx76206@funix.edu.vn") {
    nothing.classList.toggle("hidden");
    nothing1.classList.toggle("hidden");
  } else if (emailInput.value === "") {
    loichidan.textContent = "Please fill in the blank.";
    loichidan.style.color = "red";
  } else {
    loichidan.textContent =
      "This email is not registered before.Please try again!";
    loichidan.style.color = "red";
  }
});
document.getElementById("leavebutton").addEventListener("click", function (a) {
  a.preventDefault();
  nothing.classList.toggle("hidden");
  nothing1.classList.toggle("hidden");
});

//phần thông tin
document.querySelectorAll(".viewmore-function").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const muctieu = this.closest(".vienngoai").querySelector(".nothing2");

    if (muctieu) {
      muctieu.classList.toggle("hidden");

      if (muctieu.classList.contains("hidden")) {
        this.textContent = "▼ View more";
      } else {
        this.textContent = "▲ View less";
      }
    }
  });
});
