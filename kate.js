const files = [
  "kate/01-Kate-Upton-Body-Paint-optimized.jpg",
  "kate/09-Kate-Upton-Body-Paint-optimized.jpg",
  "kate/10-Kate-Upton-Sexy-optimized.jpg",
  "kate/13-Kate-Upton-Body-Paint-optimized.jpg",
  "kate/30-Kate-Upton-Nude-Naked-Leaked-optimized.jpg",
  "kate/33939026_1039214059564799_1213023099398651904_n.jpg",
  "kate/077808980---11_kate-upton_11jpg.jpg",
  "kate/078081197_12_kate-upton_25jpg.jpg",
  "kate/kate-upton-2014-premium-photo-op44-194768-rawfinaljpg.jpg",
  "kate/kate-upton-2014-web-photo-op44-186942-rawfinalwjpg.jpg",
  "kate/kate-upton-getting-outta-in-topless-optimized.jpg",
  "kate/kate-upton-leaked-02-optimized.jpg",
  "kate/kate-upton-leaked-boobs-optimized.jpg",
  "kate/kate-upton-leaked-tits-optimized.jpg",
  "kate/kate-upton-naked-tits-covered-optimized.jpg",
  "kate/Kate-Upton-nude-145x145-optimized.jpg",
  "kate/Kate-Upton-nude-bikini-topless-ass-tits-pussy-porn-ScandalPlanet-12-optimized.jpg",
  "kate/Kate-Upton-nude-hot-sexy-topless-bikini-feet-porn-ass-boob-pussy-ScandalPla (1).jpg",
  "kate/Kate-Upton-nude-hot-sexy-topless-bikini-feet-porn-ass-boob-pussy-ScandalPla (2).jpg",
  "kate/Kate-Upton-nude-hot-sexy-topless-bikini-feet-porn-ass-boob-pussy-ScandalPla (3).jpg",
  "kate/Kate-Upton-nude-hot-sexy-topless-bikini-feet-porn-ass-boob-pussy-ScandalPla (4).jpg",
  "kate/Kate-Upton-nude-hot-sexy-topless-bikini-feet-porn-ass-boob-pussy-ScandalPla (5).jpg",
  "kate/Kate-Upton-nude-hot-sexy-topless-bikini-feet-porn-ass-boob-pussy-ScandalPla (6).jpg",
  "kate/Kate-Upton-nude-hot-sexy-topless-bikini-feet-porn-ass-boob-pussy-ScandalPlanet-.jpg",
  "kate/Kate-Upton-Nude-Mirror-Selfie-Leaked-419x550-optimized.jpg",
  "kate/Kate-Upton-nude-porn-hot-topless-feet-bikini-ass-tits-pussy-ScandalPlanet-4-opt.jpg",
  "kate/Kate-Upton-nude-porn-hot-topless-feet-bikini-ass-tits-pussy-ScandalPlanet-10-op.jpg",
  "kate/Kate-Upton-SI-2017-3-300x300.jpg",
  "kate/Kate-Upton-SI-2017-6-300x300.jpg",
  "kate/Kate-Upton-SI-2017-11-300x300.jpg",
  "kate/Kate-Upton-SI-2017-14-300x300.jpg",
  "kate/Kate-Upton-SI-2017-19-300x300.jpg",
  "kate/Kate-Upton-SI-2017-21-300x300.jpg",
  "kate/Kate-Upton-SI-2017-23-300x300.jpg",
  "kate/kate-upton-topless-in-the-pool-optimized.jpg",
  "kate/Kate-upton-with-wet-transparent-shirt-through-which-boobs-are-showing-optimized.jpg",
  "kate/main.jpg",
  "kate/op3c-85334--13_kate-upton_13jpg.jpg",
  "kate/op3c-86410--13_kate-upton_23jpg.jpg",
  "kate/op44-75147-raw1200_0jpg.jpg",
  "kate/Sports-Illustrated-February-2017-Kate-Upton-cover-jacket-300x300.jpg",
  "kate/Sports-Illustrated-February-2017-Kate-Upton-cover-string-bikini-300x300.jpg",
  "kate/swim163_tk1_2754-rawwmfinal1920jpg (1).jpg",
  "kate/swim163_tk1_2754-rawwmfinal1920jpg.jpg",
  "kate/x161448_tk1_02293-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02294-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02299-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02308-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02315-rawweb1920jpg.jpeg",
  "kate/x161448_tk1_02315-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02351-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02384-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02403-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02419-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02430-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02445-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02455-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02456-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02498-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02510-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02526-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02528-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02532-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02540-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02542-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02547-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02571-rawweb1920jpg.jpg",
  "kate/x161448_tk1_02604-rawweb1920jpg.jpg",
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
