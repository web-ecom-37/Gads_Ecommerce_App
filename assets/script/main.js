  // date display at the footer
  const now = new Date()
  const date = document.querySelector('#date').innerHTML = now.getFullYear()

  //  =====  handburger ============
  let handburger = document.querySelector('.handburger')
  let handburgercancel = document.querySelector('.handburgercancel')
  var nav = document.querySelector("nav");
  var main = document.querySelector("main");
  var header = document.querySelector("header");

  handburger.onclick = function () {
    togger();
};

handburgercancel.onclick = function () {
    togger();
};
  function togger(){
    header.classList.toggle("showheader");
    nav.classList.toggle("shownav");
    main.classList.toggle("showmain");
    handburger.classList.toggle("showbtn");
    handburgercancel.classList.toggle("hidebtn");
}