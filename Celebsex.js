const files = [
  "Celebsex/aj.mp4",
  "Celebsex/bl_1.mp4",
  "Celebsex/bl_2.mp4",
  "Celebsex/ec.mp4",
  "Celebsex/em.webm",
  "Celebsex/em2.mp4",
  "Celebsex/eo.mp4",
  "Celebsex/ep.mp4",
  "Celebsex/fp.mp4",
  "Celebsex/jc.mp4",
  "Celebsex/ada.mp4",
  "Celebsex/ha.mp4",
  "Celebsex/jl_1.mp4",
  "Celebsex/jl_2.mp4",
  "Celebsex/jl.mp4",
  "Celebsex/kk.mp4",
  "Celebsex/mb.webm",
  "Celebsex/mj.mp4",
  "Celebsex/mk.mp4",
  "Celebsex/nk.mp4",
  "Celebsex/sex1.mp4",
  "Celebsex/sj.mp4",
  "Celebsex/ss.mp4",
  "Celebsex/z.mp4",
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

files.forEach((file, index) => {
  const item = document.createElement("div");
  item.className = "gallery-item";
  const video = document.createElement("video");
  video.src = file;
  video.muted = true; // Mute for autoplay
  video.loop = true;
  video.playsInline = true;
  item.appendChild(video);
  item.addEventListener("click", () => {
    currentIndex = index;
    showModal(currentIndex);
  });
  gallery.appendChild(item);
});

function showModal(index) {
  const file = files[index];
  modal.style.display = "block";
  modalVideo.src = file;
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
