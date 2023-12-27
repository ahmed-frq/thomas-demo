AFRAME.registerComponent("set-aspect-ratio", {
  init: function () {
    const el = this.el;
    const elMedia = el.getAttribute("src").substring(1);
    const media = document.getElementById(elMedia);

    if (media.tagName === "A-ASSET-ITEM") {
      const mediaSrc = media.getAttribute("src");
      const newMedia = document.createElement("video");
      newMedia.src = mediaSrc;

      newMedia.addEventListener("loadedmetadata", function () {
        const mediaAspectRatio = newMedia.videoWidth / newMedia.videoHeight;
        el.setAttribute("width", mediaAspectRatio);
      });
    } else if (media.tagName === "VIDEO") {
      const mediaAspectRatio = media.videoWidth / media.videoHeight;
      el.setAttribute("width", mediaAspectRatio);
    } else {
      const mediaAspectRatio = media.naturalWidth / media.naturalHeight;
      el.setAttribute("width", mediaAspectRatio);
    }
  },
})