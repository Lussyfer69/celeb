const files = [
  "Disha/-88385185.jpg",
  "Disha/-190555494.jpg",
  "Disha/-307367439.jpg",
  "Disha/-563866093.jpg",
  "Disha/-697679310.jpg",
  "Disha/-705924240.jpg",
  "Disha/-734024029.jpg",
  "Disha/-774839364.jpg",
  "Disha/-872233375.mp4",
  "Disha/-883732929.jpg",
  "Disha/-907484138.jpg",
  "Disha/-1195879365.jpg",
  "Disha/-1224924118.jpg",
  "Disha/-1415640754.jpg",
  "Disha/-1518290819.jpg",
  "Disha/-1557520785.jpg",
  "Disha/-1902287854.jpg",
  "Disha/-1960966662.jpg",
  "Disha/06fc0b32b8caa46b168e3b4e426d8932.jpg",
  "Disha/20250806_134316.jpg",
  "Disha/93408809.jpg",
  "Disha/94301195.mp4",
  "Disha/365753011.jpg",
  "Disha/681948834.jpg",
  "Disha/952955468.jpg",
  "Disha/961162903.jpg",
  "Disha/1082979601.jpg",
  "Disha/1354574244.jpg",
  "Disha/1359400193.mp4",
  "Disha/1393137351.mp4",
  "Disha/1442638902.jpg",
  "Disha/1500391115.jpg",
  "Disha/1538109344.jpg",
  "Disha/1585937333.jpg",
  "Disha/1598288056.jpg",
  "Disha/1944761166.jpg",
  "Disha/1982208402.jpg",
  "Disha/1993607592.jpg",
  "Disha/1998753067.jpg",
  "Disha/1.jpg",
  "Disha/2.jpg",
  "Disha/3.jpg",
  "Disha/DP.mp4",
  "Disha/image0.jpg",
  "Disha/IMG_4688.png",
  "Disha/IMG_5986.png",
  "Disha/IMG_5988.png",
  "Disha/IMG_20240714_203505_377.jpg",
  "Disha/IMG_20240810_172128_894.jpg",
  "Disha/IMG_20240815_004609_416.jpg",
  "Disha/IMG_20240815_004611_164.jpg",
  "Disha/IMG_20240815_004616_253.jpg",
  "Disha/IMG_20240817_203939_080.jpg",
  "Disha/Instagram_a6ee38474e644b318c6f4846cc7f6b.jpg",
  "Disha/Instagram_a6ee38474e644b318c6fe04846cc7f6b.jpg",
  "Disha/RDT_20240827_1143004859597525194945920.jpg",
  "Disha/SaveVid.to_537332269_18536816407013912_1268054073555600321_n.jpg",
  "Disha/Screenshot_20240715_152919_Instagram.jpg",
  "Disha/Screenshot_20240812_201828_Instagram.jpg",
  "Disha/Screenshot_20250529_151415_Reddit.jpg",
  "Disha/SnapInsta.to_499934871_18520097551013912_710621476274765555_n.jpg",
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
