const files = [
  "Ass/-1195879365.jpg",
  "Ass/-1518290819.jpg",
  "Ass/10.jpg",
  "Ass/13.png",
  "Ass/14d30659bb44010f0dc3da539bda6415.jpg",
  "Ass/15.jpg",
  "Ass/16.jpg",
  "Ass/86e15934667ddcb2b82b0f84b87d6b85.jpg",
  "Ass/549e80570bdfb3dc8dc528c7be73828d.jpg",
  "Ass/611f41f0af3906a4ca9abce660ef35a3.jpg",
  "Ass/7392b8c6034ea5c8197928efa6c40c9a.jpg",
  "Ass/7705d8d83e1c9c60b52ebb8065a11ae1.jpg",
  "Ass/116119e497dbbfc90dd8377688d3bad9.jpg",
  "Ass/520876026f5b1da09f50eb591ca3ddf2.jpg",
  "Ass/952955468.jpg",
  "Ass/a02ef5cf78ab9a57432972e85c7c1851.jpg",
  "Ass/a9c4c14a1c34a61a7eee3c5d024b17b6.jpg",
  "Ass/b583f18844bebcf4e93464b5e1a24998.jpg",
  "Ass/b211676e55c24671dc7026a3af967a64.jpg",
  "Ass/c8de65edddac471788ab645fe17c7b79.jpg",
  "Ass/c5186b4a572e0bd8e022f734fcd3d123.jpg",
  "Ass/daa9e18e867e6ec1219c445858182ced.jpg",
  "Ass/f5c33d30ccab8a6541a58548b2f34222.jpg",
  "Ass/IMG_8798.jpg",
  "Ass/IMG_8799.jpg",
  "Ass/IMG_7366531296dad0db5474.png",
  "Ass/j4y87397n7bc1.jpg",
  "Ass/lace-body-suit-v0-ae5yys1kom2c1.jpg",
  "Ass/millie_bobby_brown4.jpg",
  "Ass/millie_bobby_brown5.jpg",
  "Ass/Olivia-Munn-Booty-4.jpg",
  "Ass/realbarbarapalvin_21c2633f5cf24e64ac8359535bc83e5d.jpg",
  "Ass/realbarbarapalvin_ac39b71cb745497d934a3668df3e154f.jpg",
  "Ass/SaveVid.to_537332269_18536816407013912_1268054073555600321_n.jpg",
  "Ass/eo.mp4",
  "Ass/kj_ass.jpg",
  "Ass/kj_ass2.jpg",
  "Ass/kj_ass3.jpg",
  "Ass/ass1.jpg",
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const prevDirBtn = document.getElementById("prev-dir");
const nextDirBtn = document.getElementById("next-dir");
let currentIndex = 0;

const directories = [
  "Alia",
  "Ass",
  "Boobs",
  "Brook",
  "Disha",
  "Kiara",
  "Madelyn",
  "Margot",
  "Millie",
  "Munn",
  "Olivia",
  "Swimsuit Illustrated",
  "Syd",
  "kate",
  "Celebsex",
];
const currentDir = "Ass";
const currentDirIndex = directories.indexOf(currentDir);

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

prevDirBtn.onclick = function () {
  const prevIndex =
    currentDirIndex > 0 ? currentDirIndex - 1 : directories.length - 1;
  window.location.href = directories[prevIndex] + ".html";
};

nextDirBtn.onclick = function () {
  const nextIndex =
    currentDirIndex < directories.length - 1 ? currentDirIndex + 1 : 0;
  window.location.href = directories[nextIndex] + ".html";
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
