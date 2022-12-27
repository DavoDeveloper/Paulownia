// /////////////////////////////////////////////////////////////////// tabs ///////////////////////////////////////////////////////////////////////

function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

let closing = document.getElementsByClassName("closing");
let close = document.getElementsByClassName("close-content");
for (let i = 0; i < closing.length; i++) {
  for (let j = 0; j < close.length; j++) {
    close[j].addEventListener("click", () => {
      if (j == i) {
        closing[i].classList.toggle("hide");
        close[j].classList.toggle("active1");
        close[j].classList.toggle("rotate");
      }
    });
  }
}

// ///////////////////////////////////////////////////////////////// notice close //////////////////////////////////////////////////////////

let close_notice = document.querySelector(".close_notice");
let close_x = document.querySelector(".close_x");
close_x.addEventListener("click", () => {
  close_notice.style.display = "none";
});

// /////////////////////////////////////////////////////////////// download photo ////////////////////////////////////////////////////////////

const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");

chooseFile.addEventListener("change", function () {
  getImgData();
});

function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      console.log(this.result);
      imgPreview.setAttribute("src", this.result);
    });
  }
}

let del = document.querySelector("#del");
del.addEventListener("click", () => {
  imgPreview.setAttribute("src", "");
});
