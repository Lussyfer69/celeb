const files = [
  "millie/7e03bd3513f80b4ef55ed2bb640b347c.jpg",
  "millie/8cd946195e8c8b8ae5342103122c9551.jpg",
  "millie/56397e69656e45d5b3ff149754764cff.jpg",
  "millie/20240627_225448.png",
  "millie/d153fc2601d963aab37bf6a240e0419a.jpg",
  "millie/f67801069ede34bb9bb6c7b7670c6c92.jpg",
  "millie/g4ebyw057qvb1.jpeg",
  "millie/image.jpg",
  "millie/IMG_8215.jpg",
  "millie/millie_bobby_brown_nips_ass.jpg",
  "millie/millie_bobby_brown_see_thru_nips.jpg",
  "millie/millie_bobby_brown4.jpg",
  "millie/millie_bobby_brown5.jpg",
  "millie/millie_bobby_brown9.jpg",
  "millie/millie_bobby_brown14.jpg",
  "millie/Millie-Bobby-Brown-nude-ass-bikini-topless-sextape-ScandalPlanet-5-optimized.jpg",
  "millie/Millie-Bobby-Brown-nude-ass-bikini-topless-sextape-ScandalPlanet-6-optimized.jpg",
  "millie/millie-bobby-brown-nude-topless-porn-bikini-feet-tits-ass-sexy-feet-porn-leaked-ScandalPlanet-1-opti.jpg",
  "millie/Millie-Bobby-Brown-nude-topless-porn-sexy-tits-pussy-ass-feet-boyfriend-bikini-no-makeup-ScandalPlan.jpg",
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
