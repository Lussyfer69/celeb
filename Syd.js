const files = [
  "Syd/1001.jpg",
  "Syd/1002.jpg",
  "Syd/10001.jpg",
  "Syd/10002.jpg",
  "Syd/10003.jpg",
  "Syd/10004.jpg",
  "Syd/10005.jpg",
  "Syd/10006.jpg",
  "Syd/10007.jpg",
  "Syd/10008.jpg",
  "Syd/10009.jpg",
  "Syd/10010.jpg",
  "Syd/10011.jpg",
  "Syd/10012.jpg",
  "Syd/10013.jpg",
  "Syd/10014.jpg",
  "Syd/10015.jpg",
  "Syd/10016.jpg",
  "Syd/10017.jpg",
  "Syd/10018.jpg",
  "Syd/main.jpg",
  "Syd/RDT_20240118_111307.mp4",
  "Syd/RDT_20240229_124249.mp4",
  "Syd/RDT_20240229_124313.mp4",
  "Syd/RDT_20240229_124431.mp4",
  "Syd/RDT_20240229_124454.mp4",
  "Syd/RDT_20240229_124228458113417414297101.jpg",
  "Syd/RDT_20240229_124236346870069499758478.jpg",
  "Syd/RDT_20240229_1240396613947341258436576.jpg",
  "Syd/RDT_20240229_1240506416225769691662766.jpg",
  "Syd/RDT_20240229_1240536121312650135743220.jpg",
  "Syd/RDT_20240229_1240569044951741785994454.jpg",
  "Syd/RDT_20240229_1242551322978367947819404.jpg",
  "Syd/RDT_20240229_1243303838061136564733064.jpg",
  "Syd/RDT_20240229_1243322939861265172780420.jpg",
  "Syd/RDT_20240229_1243435179743758865611592.jpg",
  "Syd/SinglePastelArmyworm-mobile.mp4",
  "Syd/SourTenderEnglishpointer-mobile.mp4",
  "Syd/sydney_sweeney_nude_the_voyeurs.jpg",
  "Syd/sydney_sweeney_white_black_nightie.jpg",
  "Syd/sydney_sweeney4.jpg",
  "Syd/sydney_sweeney6.jpg",
  "Syd/Sydney-Sweeney-The-Voyeurs-5.mp4",
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

files.forEach((file, index) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  const isVideo = file.endsWith(".mp4");
  if (isVideo) {
    const video = document.createElement("video");
    video.src = file;
    video.muted = true; // Mute for autoplay
    video.loop = true;
    video.playsInline = true;
    item.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = file;
    img.alt = file;
    item.appendChild(img);
  }
  item.addEventListener("click", () => {
    currentIndex = index;
    showModal(currentIndex);
  });
  gallery.appendChild(item);
});

function showModal(index) {
  const file = files[index];
  const isVideo = file.endsWith(".mp4");
  modal.style.display = "block";
  if (isVideo) {
    modalImg.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.src = file;
  } else {
    modalVideo.style.display = "none";
    modalImg.style.display = "block";
    modalImg.src = file;
  }
}

prevBtn.onclick = function () {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : files.length - 1;
  showModal(currentIndex);
};

nextBtn.onclick = function () {
  currentIndex = currentIndex < files.length - 1 ? currentIndex + 1 : 0;
  showModal(currentIndex);
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  modalVideo.pause();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalVideo.pause();
  }
};
