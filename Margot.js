const files = [
  "Margot/1.jpg",
  "Margot/2.jpg",
  "Margot/3.jpg",
  "Margot/4.jpg",
  "Margot/5.jpg",
  "Margot/6.jpg",
  "Margot/7.jpg",
  "Margot/69e2d50b9cd4474e802beeefaffc7101-hd.mp4",
  "Margot/22675_480p.mp4",
  "Margot/c34ec69c926145f299cd668230637013-hd_1.mp4",
  "Margot/RDT_20240607_151526.mp4",
  "Margot/RDT_20240607_151758441694818926198967.jpg",
  "Margot/RDT_20240607_1515062625718049493944752.jpg",
  "Margot/RDT_20240607_1516442128173900432990812.jpg",
  "Margot/RDT_20240607_1517448118479448015659090.jpg",
  "Margot/Screenshot_20240608_104453_Gallery.jpg",
  "Margot/Screenshot_20240608_121326_Instagram.jpg",
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
