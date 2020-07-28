var selectBtns = document.querySelectorAll(".select__drop");
// Listen for all clicks on the document
selectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener("click", function (e) {
    var selectList = e.target.nextElementSibling;
    var selectLabel = e.target.lastElementChild;
    selectLabel.classList.toggle("selectLabel-js");
    e.target.classList.toggle("selectBtn-js");
    selectList.classList.toggle("selectList-js");

  });
});
// window.onclick = function (event) {
//   if (!event.target.matches('.select__drop')) {

//   }
// }



