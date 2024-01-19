"use strict";

let NewUserName,
  NewPassword,
  RepeatPassword,
  CurrentUserName,
  CurrentPassword,
  startSemester,
  weekType,
  lessonName,
  lessonTime,
  eventName,
  eventTime;
// make current time
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// functions
// clear the value of the sign up form
const clearSignUpForm = function () {
  document.querySelector(".username-register").value = "";
  document.querySelector(".password-register").value = "";
  document.querySelector(".repeat-password").value = "";
};
// change login to sign up
document
  .querySelector(".change-to-sing-up")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".sign-up-container").classList.remove("hidden");
  });
// sign up section
document.querySelector(".btn-sign-up").addEventListener("click", function (e) {
  e.preventDefault();
  NewUserName = document.querySelector(".username-register").value;
  NewPassword = document.querySelector(".password-register").value;
  RepeatPassword = document.querySelector(".repeat-password").value;
  if (NewUserName === "" || NewPassword === "" || RepeatPassword === "") {
    document.querySelector(".sign-up-message").textContent =
      "Please fill out the form";
    document.querySelector(".sign-up-message").style.color = "black";
  } else if (NewPassword !== RepeatPassword) {
    document.querySelector(".sign-up-message").style.color = "red";
    document.querySelector(".sign-up-message").textContent =
      "Be carefull! you enter different password.";
  } else if (NewPassword === RepeatPassword) {
    document.querySelector(".sign-up-message").style.color = "green";
    document.querySelector(".sign-up-message").textContent =
      "Congratulation! Your account is created.";
    // document.querySelector(".bact-login").textContent = "Back to login";
  }
  clearSignUpForm();
});
// back to login form
document.querySelector(".bact-login").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".login-container").classList.remove("hidden");
  document.querySelector(".sign-up-container").classList.add("hidden");
  document.querySelector(".sign-up-message").textContent = "";
});
// login section
document.querySelector(".btn-submit").addEventListener("click", function (e) {
  e.preventDefault();
  CurrentUserName = document.querySelector(".username").value;
  CurrentPassword = document.querySelector(".password").value;
});
// after login
document.querySelector(".btn-submit").addEventListener("click", function () {
  document.querySelector(".login-container").classList.add("hidden");
  document.querySelector(".event-enter-container").classList.remove("hidden");
  document.querySelector(".current-date").textContent = `Today : ${date}`;
});
// go to first item of the menu
document.querySelector(".first-item").addEventListener("click", function () {
  document.querySelector(".event-enter-container").classList.add("hidden");
  document.querySelector(".curriculm-container").classList.remove("hidden");
});
// btn register of the fill out the information of the first item of the menu
document
  .querySelector(".btn-submit-curriculm")
  .addEventListener("click", function () {
    // get value of the inputs
    startSemester = document.querySelector(".start-semester").value;
    const even = document.getElementById("even").checked;
    const odd = document.getElementById("odd").checked;
    if (even === true) {
      weekType = "even";
    } else {
      weekType = "odd";
    }
    lessonName = document.querySelector(".lesson-input").value;
    lessonTime = document.querySelector(".time-lesson").value;
    console.log(lessonName, lessonTime, weekType);
    // clear the input
    document.querySelector(".lesson-input").value = "";
    document.querySelector(".time-lesson").value = "";
    document.getElementById("even").checked = false;
    document.getElementById("odd").checked = false;

    document.querySelector(".start-semester").classList.add("hidden");
    document.querySelector(".first-text-item").style.color = "red";
    document.querySelector(".first-text-item").textContent =
      "if you have any lesson, fill out the form";
  });
// back to previos page
document.querySelector(".btn-back-prev").addEventListener("click", function () {
  document.querySelector(".curriculm-container").classList.add("hidden");
  document.querySelector(".event-enter-container").classList.remove("hidden");
});
// an-event-container
// go to second item of the menu
document.querySelector(".second-item").addEventListener("click", function () {
  document.querySelector(".event-enter-container").classList.add("hidden");
  document.querySelector(".an-event-container").classList.remove("hidden");
});
// get value of the an event container
document
  .querySelector(".btn-submit-event")
  .addEventListener("click", function () {
    eventName = document.querySelector(".event-name").value;
    eventTime = document.querySelector(".event-time").value;
    // clean the input
    document.querySelector(".event-name").value = "";
    document.querySelector(".event-time").value = "";
});
document.querySelector(".btn-back-prev-event").addEventListener("click",function(){
  document.querySelector(".an-event-container").classList.add("hidden");
  document.querySelector(".event-enter-container").classList.remove("hidden");

})
// today-schedule-report
document.querySelector('.today-report').addEventListener("click",function() {
  document.querySelector(".event-enter-container").classList.add("hidden");
  document.querySelector('.today-schedule-report').classList.remove("hidden");
  document.querySelector(".current-date2").textContent = `Today : ${date}`
})