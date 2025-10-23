const files = [
  "Kiara/03ed9a0fe04c6b9a97741f4854825ae1.jpg",
  "Kiara/10.jpg",
  "Kiara/13.png",
  "Kiara/15.jpg",
  "Kiara/16.jpg",
  "Kiara/46d94dbd-55af-44b6-936f-8483c4d44c44.mp4",
  "Kiara/549e80570bdfb3dc8dc528c7be73828d.jpg",
  "Kiara/757a2e1731c613887b615c5e58d442a8.jpg",
  "Kiara/3165e0e90dea285f02eea8d48b49dd24.jpg",
  "Kiara/08375e3e02867b2a41b84ffdd01c599a.jpg",
  "Kiara/750235ac5058495ab54aaf2d2c4c1a20.jpg",
  "Kiara/3033956c9df55921560ed708703630cc.jpg",
  "Kiara/98074638ed6f1515e11933cc50088e06.jpg",
  "Kiara/c8a3716db1c069e16c7d9bba1b105b42.jpg",
  "Kiara/cf5c18404532ca029354aeaa8ca3b99f.jpg",
  "Kiara/cf35b46b9501bbd0f98e532243d726be.jpg",
  "Kiara/e002a723691d1eb5329c7ffd8ab2b8c3.jpg",
  "Kiara/kiara_bikini.mp4",
  "Kiara/kiara_goon.png",
  "Kiara/snapins-ai_3691774908280984786.jpg",
  "Kiara/snapins-ai_3691774908415314305.jpg",
  "Kiara/the-sexiest-bikini-there-ever-will-be-unbeatable-period-v0-fhc49ydy3cgf1.jpg",
  "Kiara/videoframe_9364.png",
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
