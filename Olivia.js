const files = [
  "Olivia/7e1263c1-3946-4706-a06b-395afb770c6c.jpeg",
  "Olivia/60a6098d-f4cb-477b-8599-408247c9d0ea.jpeg",
  "Olivia/40661ad7-2dc0-4b7c-aec2-eb7908a5c803.jpeg",
  "Olivia/2197307037.jpg",
  "Olivia/cover-olivia-rodrigo-billboard-2024-bb16-sami-drasin-4-1240.jpg",
  "Olivia/GnP65jbWQAAB3F5.jpg",
  "Olivia/IMG_2745.jpg",
  "Olivia/IMG_4147.jpg",
  "Olivia/IMG_6942.png",
  "Olivia/IMG_8798.jpg",
  "Olivia/IMG_8799.jpg",
  "Olivia/IMG_7366531296dad0db5474.png",
  "Olivia/j4y87397n7bc1.jpg",
  "Olivia/lace-body-suit-v0-ae5yys1kom2c1.jpg",
  "Olivia/MTV-1886206561854374046-01.jpg",
  "Olivia/olivia-rodrigo-v0-q4qdpq2yzcwd1.png",
  "Olivia/olivia-rodrigo-what-are-your-thoughts-singer-songwriter-v0-bvq6fvmfsbq81.jpg",
  "Olivia/olivia.png",
  "Olivia/olivia2.png",
  "Olivia/oliviarodrigo_0a47fd7fd29846a690078e365616c64d.jpg",
  "Olivia/oliviarodrigo_6eae04b681d04a62890b46dbf94dd2a3.jpg",
  "Olivia/oliviarodrigo_29baeb635be34d3c94d6cec0e78128de.jpg",
  "Olivia/oliviarodrigo_b173c6259a254cf195ee7530090cfb6b.jpg",
  "Olivia/oliviarodrigo_d60e50f8429d4abe9f301711e60567a1.jpg",
  "Olivia/RDT_20240220_0025331909961025586088689.jpg",
  "Olivia/RDT_20241015_1502493404754948013655087.jpg",
  "Olivia/RDT_20250208_20574514216476001702178.jpg",
  "Olivia/rs_1200x1200-211121160300-1200olivia-rodrigo-ama-2021.jpg",
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
