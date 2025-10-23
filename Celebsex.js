const files = [
  "celebsex/aj.mp4",
  "celebsex/bl_1.mp4",
  "celebsex/bl_2.mp4",
  "celebsex/ec.mp4",
  "celebsex/em.webm",
  "celebsex/em2.mp4",
  "celebsex/eo.mp4",
  "celebsex/ep.mp4",
  "celebsex/fp.mp4",
  "celebsex/jc.mp4",
  "celebsex/ada.mp4",
  "celebsex/ha.mp4",
  "celebsex/jl_1.mp4",
  "celebsex/jl_2.mp4",
  "celebsex/jl.mp4",
  "celebsex/kk.mp4",
  "celebsex/mb.webm",
  "celebsex/mj.mp4",
  "celebsex/mk.mp4",
  "celebsex/nk.mp4",
  "celebsex/sex1.mp4",
  "celebsex/sj.mp4",
  "celebsex/ss.mp4",
  "celebsex/z.mp4",
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
