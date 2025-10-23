const files = [
  "Swimsuit Illustrated/3416.mp4",
  "Swimsuit Illustrated/barbara-palvin-2016-web-x160011_tk5_2500-rawwmfinal1920jpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2014-web-photo-op44-119896-rawfinalwjpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2014-web-photo-op44-120270-rawfinalwjpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2014-web-photo-op44-120496-rawfinalwjpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2014-web-photo-op44-121578-rawfinalwjpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2015-premium-photo-x158020_tk3_5536-rawfinaljpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2015-web-photo-x158020_tk3_3117-rawmasterwmjpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2015-web-photo-x158020_tk3_3722-rawmasterwmjpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2015-web-photo-x158020_tk3_4538-rawmasterwmjpg.jpg",
  "Swimsuit Illustrated/gigi-hadid-2016-premium-x159793_tk2_01076-rawpfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-premium-x159793_tk2_02308b-rawpfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-premium-x159793_tk2_03591-rawpfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-premium-x159793_tk2_03839-rawpfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_00684-rawwmfinal1920jpg.jpg.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_01103-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_01103-rawwmfinal1920jpg.jpg.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_01209-rawwmfinal1920jpg.jpg.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_01221-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_01318-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_01318-rawwmfinal1920jpg.jpg.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_02136-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_02212-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_02562-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_02562-rawwmfinal1920jpg.jpg.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03234-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03276-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03276-rawwmfinal1920jpg.jpg.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03348-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03391-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03513-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03562-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03568-rawwmfinal1920jpg.jpg.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03576-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_03627-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/gigi-hadid-2016-web-x159793_tk2_04055-rawwmfinal1920jpg.jpg_1.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_1.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_2.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_3.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_4.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_5.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_6.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_7.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_8.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_9.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_10.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_11.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_12.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_13.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_14.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_15.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_16.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_17.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_18.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_19.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_20.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_21.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_22.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_23.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_24.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_25.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_26.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_27.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_28.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_29.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_30.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_31.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_32.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_33.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_34.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_35.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_36.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_37.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_38.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_39.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_40.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_41.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_42.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_43.jpeg",
  "Swimsuit Illustrated/Internet_20251017_110342_44.jpeg",
  "Swimsuit Illustrated/realbarbarapalvin_1d3ef1a84c4b4e25ade6fb606b981ed5.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_4fb91ad178694ac78e85f91ef0e426a6.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_6c2052f17ee44f19a567456fad27d96e.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_8a5bd0704aaf4ac69cd154c073390332.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_8cb07d87ef3a4edcb0b397c0d3db23e1.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_21c2633f5cf24e64ac8359535bc83e5d.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_44b4f3f3c2224436aa1caeaf320cc9d6.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_5685aa4ef9fb49ed94304b728c7ca0a7.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_966574d69fad4525b1f4a2c84268dfc6.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_ac39b71cb745497d934a3668df3e154f.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_c4905bc3d07c4a9e93bdf21497e1ade1.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_cf444d41dd3e460b97edf73a6c8a096e.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_d064b7eb1bf540a2a0849343e812af94.jpg",
  "Swimsuit Illustrated/realbarbarapalvin_e5aa08588f2d43e7b6434457d1d468a7.jpg",
  "Swimsuit Illustrated/rs_634x1024-150626093130-634.Gigi-Hadid-Bikini-Filming.jl.062615.jpg",
  "Swimsuit Illustrated/x159793_tk2_00846-rawpfinal1920jpg.jpg.jpeg",
  "Swimsuit Illustrated/x161321_tk1_02827-rawwm1920jpg.jpg",
  "Swimsuit Illustrated/x161321_tk1_03815-rawwm1920jpg.jpg",
  "Swimsuit Illustrated/x161321_tk1_08376-rawwm1920jpg.jpg",
  "Swimsuit Illustrated/x161321_tk1_09500-rawwm1920jpg.jpg",
  "Swimsuit Illustrated/x162348_tk2_01578_rawfinalwm1920_1jpg.jpg",
  "Swimsuit Illustrated/x162348_tk2_01766_rawfinalwm1920_1jpg.jpg",
  "Swimsuit Illustrated/x162348_tk2_01801_rawfinalwm1920_1jpg.jpg",
  "Swimsuit Illustrated/x162348_tk2_02724_rawfinalwm1920_1jpg.jpg",
  "Boobs/gig_tit1.jpg",
  "Boobs/gig_tit2.jpg",
  "Boobs/jk_tit.jpg",
  "Boobs/jl_tit.jpg",
  "Boobs/jl_tit2.jpg",
  "Boobs/jl_tit3.jpg",
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.getElementsByClassName("close")[0];

files.forEach((file) => {
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
  });
  gallery.appendChild(item);
});

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
