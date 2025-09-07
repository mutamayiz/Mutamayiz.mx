async function loadPosts() {
  try {
    const response = await fetch("/.netlify/functions/posts"); // يطلب من الباكند
    const data = await response.json();

    const container = document.getElementById("content");
    container.innerHTML = "";

    data.records.forEach(record => {
      const post = document.createElement("div");
      post.className = "post";
      post.innerHTML = `
        <h3>${record.fields.title || "بدون عنوان"}</h3>
        <p>${record.fields.content || ""}</p>
      `;
      container.appendChild(post);
    });
  } catch (error) {
    document.getElementById("content").innerHTML =
      "<p>❌ فشل تحميل المنشورات</p>";
  }
}

loadPosts();