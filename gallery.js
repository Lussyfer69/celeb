const files = [
  "Alia/1.png",
  "Alia/01d3ed1d58f7cdaed24b24bf596c5c8c.jpg",
  "Alia/2.png",
  "Alia/3.jpg",
  "Alia/4.png",
  "Alia/5fc32ed36c61caf008029ff6e81c8396.jpg",
  "Alia/08.09.2024_12.15.21_REC.mp4",
  "Alia/8eb3e8596e53dcb83df2f1b7952cce2a.jpg",
  "Alia/9bd4d8cf6a75d904c08467cd9a06d719.jpg",
  "Alia/16.08.2024_14.37.31_REC.mp4",
  "Alia/47e019bea858387e68c440978955e56c.jpg",
  "Alia/50da84a6a400a588b13880210ace5ed8.jpg",
  "Alia/99df48ddd602163810633ce589b5d4a9.jpg",
  "Alia/8490f9b8721f40ccd55190f669f145ab.jpg",
  "Alia/10001.jpg",
  "Alia/10002.jpg",
  "Alia/10005.jpg",
  "Alia/10006.jpg",
  "Alia/97696e25f40ebbf60dd91cde3cd6b4ae.jpg",
  "Alia/475115145_18047800718225779_6076828440579555810_n.png",
  "Alia/a2414fc407864ce229864678691deb06.jpg",
  "Alia/a5115040b3bdf7808b8db64ce92b0584.jpg",
  "Alia/actressglam_4k_a1378e410b964564a0246d1b34a7696f.jpg",
  "Alia/Alia Bhatt Hot Pics from Rocky Aur Rani Ki Prem Kahani.jpg",
  "Alia/alia-bhatt-cleavage-show-v0-uaa5wfqd18ob1.jpg",
  "Alia/Alia-Bhatt-spreading-leg-nude-sex-deepfake-cum-inside-pussy-hole-video.mp4",
  "Alia/alia.jpg",
  "Alia/aliaabhatttt8_b6488cc09eac4dd3b292e40f995b8138.jpg",
  "Alia/aliaabhatttt8_f141d6d3f6ff4b3f94a242618e651890.jpg",
  "Alia/aliathighs.jpg",
  "Alia/bdbfeddbb82b72d9cdda30c50a61c0e4.jpg",
  "Alia/bdc65c7f9ceabf953f862505e0e2c846.jpg",
  "Alia/daa292ae40c0b29ee85e75b1602b39b6.jpg",
  "Alia/dd15da847024bd287b5c62b1dc00577a.jpg",
  "Alia/e75a8a86bb402459a12d0da1e920d9dc.jpg",
  "Alia/fap.mp4",
  "Alia/image0.jpg",
  "Alia/image10.jpg",
  "Alia/IMG_0949.jpg",
  "Alia/IMG_20250823_184421_664.jpg",
  "Alia/mommy-alia-bhatt-and-her-growth-v0-a1ndek759npb1.jpg",
  "Alia/mommyalia.jpg",
  "Alia/mommytitties.jpg",
  "Alia/planet.aliaabhatt_5db5933aa9574285837560d088571759.jpg",
  "Alia/RDT_20250713_1042494420374249825926209.jpg",
  "Alia/RDT_20250713_1042553094252097876468906.jpg",
  "Alia/SaveGram.App_500659656_18518294290021763_4192932204311695190_n.jpg",
  "Alia/Screenshot_20240114_122313_Instagram.jpg",
  "Alia/Screenshot_20240114_122338_Instagram.jpg",
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
