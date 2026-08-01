const images = [
  "1FlyI.jpg",
  "34GJN.jpg",
  "6F5Jv.jpg",
  "ChatGPT Image Jul 15, 2026, 08_49_11 PM.png",
  "ChatGPT Image Jul 16, 2026, 08_17_10 PM.png",
  "ChatGPT Image Jul 19, 2026, 09_18_20 PM.png",
  "ChatGPT Image Jul 28, 2026, 09_57_36 AM.png",
  "ChatGPT Image Jul 28, 2026, 09_59_29 AM.png",
  "ChatGPT Image Jul 30, 2026, 07_32_42 PM.png",
  "Heracy Map Example @ PixelJoint_com.jpg",
  "LeMM7.jpg",
  "QCE0T.jpg",
  "R8L0v.jpg",
  "SIp3g.jpg",
  "TsAnN.jpg",
  "content.jpg",
  "d86452a6-6223-44ba-b30b-9d5b23ce0db7.png",
  "gPiag.jpg",
  "pyWXO.jpg",
  "qmFYp.jpg",
  "rxI9o.jpg",
  "ufBpx.jpg",
  "uk49N.jpg"
];

const gallery = document.getElementById("gallery");

images.forEach((imageName) => {
  const card = document.createElement("article");
  card.className = "card";

  const imageUrl = `wallpapers/${encodeURIComponent(imageName)}`;

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = imageName;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h2");
  title.textContent = imageName;

  const actions = document.createElement("div");
  actions.className = "actions";

  const viewLink = document.createElement("a");
  viewLink.className = "button secondary";
  viewLink.href = imageUrl;
  viewLink.target = "_blank";
  viewLink.rel = "noopener noreferrer";
  viewLink.textContent = "View";

  const downloadLink = document.createElement("a");
  downloadLink.className = "button";
  downloadLink.href = imageUrl;
  downloadLink.setAttribute("download", imageName);
  downloadLink.textContent = "Download";

  actions.appendChild(viewLink);
  actions.appendChild(downloadLink);
  cardBody.appendChild(title);
  cardBody.appendChild(actions);

  card.appendChild(img);
  card.appendChild(cardBody);
  gallery.appendChild(card);
});
