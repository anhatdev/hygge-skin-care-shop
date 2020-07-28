var selectList = document.querySelectorAll(".select__drop");
selectList.forEach((select) => {
  select.addEventListener("click", function (e) {
    var dropDown = e.target.nextElementSibling;
    e.target.classList.toggle("selectClick");
    dropDown.classList.toggle("selectShow");
  });
});
