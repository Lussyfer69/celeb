const files = [
  "Madelyn/1c186c0a88d5f2e5dafd571c304794d1.jpg",
  "Madelyn/4b308134dce46bebd70e81e8163e83d7.jpg",
  "Madelyn/4e1df2e4431dc59974069278e0199a3f.png",
  "Madelyn/8fdca152242d31586c32c3ed17dec463.jpg",
  "Madelyn/20a38ae6cb66eab29be0878640b1306a.jpg",
  "Madelyn/79d471640f5e99cf62fa7d238d1f4a64.jpg",
  "Madelyn/655bee132b32ad7872d934a7463f2cf1.jpg",
  "Madelyn/793ec276348b46d719aaa542aab51e2f.jpg",
  "Madelyn/45473d19b80329f3d907ac4ff39eddaf.jpg",
  "Madelyn/b50ee1c0cf3e1351656219050f3cf377.jpg",
  "Madelyn/c7cefb1893700ed6556b69fc9fd30c5c.jpg",
  "Madelyn/ca06b6f9b1a970f60557a30584698d90.jpg",
  "Madelyn/d58e021910a12753ce7c9364adf07fd6.jpg",
  "Madelyn/e8d0c476ff27914e2f1cf579dfb9ab35.jpg",
  "Madelyn/f5c33d30ccab8a6541a58548b2f34222.jpg",
  "Madelyn/madelyn_cline_bikini_ass.jpg",
  "Madelyn/madelyn_cline5.jpg",
  "Madelyn/madelyn_cline12.jpg",
  "Madelyn/Madelyn-Cline-nude-topless-hot-bikini-new-att-tits-ScandalPlanet-21-optimized.jpg",
  "Madelyn/madelyn-is-so-amazing-v0-5bvuzsmcgj0d1.jpg",
  "Madelyn/sex.mp4",
  "Madelyn/she-is-fine-asf-v0-pp7zfqvpgpwc1.jpg",
  "Madelyn/shes-just-v0-4ca2ucit5lxc1.jpg",
  "Madelyn/the-photo-shoot-of-the-red-bikini-is-my-favorite-of-her-v0-4ey9ejhv63zc1.jpg",
  "Madelyn/wilder-slaya-v0-47ndikch5m0d1.jpg",
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
