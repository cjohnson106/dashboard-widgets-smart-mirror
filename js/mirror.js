// Get Video
const video = document.querySelector("video");

if (navigator.mediaDevices.getUserMedia) {
  // get media from hardware
  navigator.mediaDevices
    .getUserMedia({
      video: true
    })
    .then((stream) => (video.srcObject = stream))
    .catch((error) => console.log(error));
}
