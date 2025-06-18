const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  // عند بدء التشغيل
  video.addEventListener("play", () => {
    videos.forEach((v) => {
      if (v !== video && !v.paused) {
        v.pause(); // نوقف أي فيديو آخر شغّال
      }
    });

    // نضيف تأثير الحد حول المشغّل فقط
    document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
      wrapper.classList.remove("playing");
    });
    video.parentElement.classList.add("playing");
  });

  // عند الإيقاف
  video.addEventListener("pause", () => {
    video.parentElement.classList.remove("playing");
  });

  // نضمن أن الفيديو يتوقف لو خرج المستخدم من الصفحة
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      video.pause();
    }
  });
});