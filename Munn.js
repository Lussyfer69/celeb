const files = [
  "Munn/gorgeous-pic-of-olivia-munn-topless-with-long-hair-and-laying-on-couch.jpg",
  "Munn/naked-olivia-munn-taking-off-her-bottom-while-topless.jpg",
  "Munn/OIP.jpeg",
  "Munn/olivia-munn_2149.jpg",
  "Munn/Olivia-Munn-2-8.jpg",
  "Munn/Olivia-Munn-Booty-2.jpg",
  "Munn/Olivia-Munn-Booty-4.jpg",
  "Munn/Olivia-Munn-Esquire-6.jpg",
  "Munn/olivia-munn-in-sexy-white-bikini-embed4.jpg",
  "Munn/olivia-munn-plunging-dress-predator-2.jpg",
  "Munn/Olivia-Munn-underwear-bikini-hot-brunette-Maxim-Hot-100.jpg",
  "Munn/Olivia-Munn-white-top-cleavage.jpg",
  "Munn/playboy-magazine-pic-of-olivia-munn-in-pink-panties-and-heels-laying-on-couch.jpg",
  "Munn/sexy-olivia-munn-poses-for-playboy-magazine-in-hot-one-piece-laying-on-orange-couch.jpg",
  "Munn/topless-pic-of-olivia-munn-for-playboy-magazine-with-finger-in-mouth.jpg",
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
