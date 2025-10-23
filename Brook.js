const files = [
  "Brook/3a49d5824185f3554fb7fe90dbe22182.jpg",
  "Brook/4f112d6002fb0e4d7985aedc7bf76de3.jpg",
  "Brook/5a0e94b6db199fc724d6dd9b2e6876d3.jpg",
  "Brook/5e9a95d4d2f1ecb0bc4c87b471442b97.jpg",
  "Brook/5f573e0419b7bf8df783fcd50c8338c4.jpg",
  "Brook/375786461_621136950141766_3774799262071128505_n_17870460977931803.heic",
  "Brook/376032108_1369598766953320_8431853740164318372_n_18000230003086073.heic",
  "Brook/376189012_980800669812144_7930568445297885633_n_17994639869501723.heic",
  "Brook/377337103_1000498781157666_889770743862758175_n_17999095631302371.heic",
  "Brook/AfA7ScLrFkFzLE3D3CjNp2s-ve9TreLpgBxoA436s2N014lYHJL3w29jnKJRdDY.jpg",
  "Brook/AfAjgQshG6yDwfkVtm4i4_CToyScWLuABaDEChunWvbJcxykBYW8r8Up68EWNtQ.jpg",
  "Brook/AfB9yWZp6vEltVMEt0rpYfExc-g3UNWbJgOEuGi3vf9zNqlRqSWk-dA7ti6s8e8.jpg",
  "Brook/AfCq6H84jlCqxT9_r47mlLAo52DaiqpRvwb-ta7Pwz_apZw0jXo02fGr_aTQWEc.jpg",
  "Brook/AfCYfdJjn4drS7X8UAjZn5AOvOiWET5xfNO5CZa-Uv7RJvZE3ToUqHhW7UI0p4I.mp4",
  "Brook/AfD7lnk6GjCIor12fwiIDgu9LT21GEjC3havRu2imPeBZHCrZ_jmg1MFdwsW7w4.jpg",
  "Brook/AfDg-r8CgVvJVm37_13IVMIhaeH45ZutPhbOUYosi5YlrDJar-jS8EmAv8VTr1o.mp4",
  "Brook/AfDhbFTOD26LvdqEusblH6kAhodrAAbsJ1gmxvUl7JfdPgdgLHCbIrVRn8FGZTw.jpg",
  "Brook/RDT_20240323_1136566541801115553012003.jpg",
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
const currentDir = "Brook";
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
