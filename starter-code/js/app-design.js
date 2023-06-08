window.addEventListener('load', (e)=>{
e.preventDefault();

const gridStuffs = [
  {
    image: "/starter-code/assets/app-design/desktop/image-airfilter.jpg",
    name: "Airfilter",
    use: "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    image: "/starter-code/assets/app-design/desktop/image-eyecam.jpg",
    name: "Eyecam",
    use: "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    image: "/starter-code/assets/app-design/desktop/image-faceit.jpg",
    name: "Faceit",
    use: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    image: "/starter-code/assets/app-design/desktop/image-todo.jpg",
    name: "Todo",
    use: "A todo app that features cloud sync with light and dark mode",
  },
  {
    image: "/starter-code/assets/app-design/desktop/image-loopstudios.jpg",
    name: "Loopstudios",
    use: "A VR experience app made for Loopstudios",
  },
];

const stuff = document.querySelector(".stuff");
gridStuffs.forEach(gridstuff => {
  const box = document.createElement("div");
  box.classList.add("box");

  const innerBox = document.createElement("div");
  innerBox.classList.add("innerbox");
  box.appendChild(innerBox);

  const boxImage = document.createElement("img");
  boxImage.classList.add("in_img");
  boxImage.src = gridstuff.image;
  innerBox.appendChild(boxImage);

  const words = document.createElement("div");
  words.classList.add("words");
  box.appendChild(words);

  const header = document.createElement("h2");
  header.textContent = gridstuff.name;
  words.appendChild(header);

  const paragraph = document.createElement("p");
  paragraph.textContent = gridstuff.use;
  words.appendChild(paragraph);

  stuff.appendChild(box);
  // console.log(box);
});

const pagesLinks = [
  {
    title: "Web Design",
    description: "View Projects",
    image: "../assets/home/desktop/image-web-design-small.jpg",
    imageTablet: "../assets/home/tablet/image-web-design.jpg",
    imageMobile: "../assets/home/mobile/image-web-design.jpg"
  },
  {
    title: "App Design",
    description: "View Projects",
    image: "../assets/home/desktop/image-graphic-design.jpg",
    imageTablet: "../assets/home/tablet/image-graphic-design.jpg",
    imageMobile: "../assets/home/mobile/image-graphic-design.jpg"
  }
];

  
const pages = document.querySelector(".pages");

pagesLinks.map(page => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const page1 = document.createElement("img");
  page1.classList.add("page1");
  page1.src = page.image;
  imageContainer.appendChild(page1);

  const pageTab = document.createElement("img");
  pageTab.classList.add("page-tab");
  pageTab.src = page.imageTablet;
  imageContainer.appendChild(pageTab);

  const pageMob = document.createElement("img");
  pageMob.classList.add("page-mob");
  pageMob.src = page.imageMobile;
  imageContainer.appendChild(pageMob);

  const web = document.createElement("div");
  web.classList.add("web");
  const header = document.createElement("h1");
  header.textContent = page.title;
  web.appendChild(header);
  imageContainer.appendChild(web);

  const anchor = document.createElement("a");
  anchor.href = "../html pages/web-design.html";
  anchor.textContent = page.description;
  const span = document.createElement("span");
  const img = document.createElement("img");
  img.setAttribute('src', '../assets/shared/desktop/icon-right-arrow.svg');
  span.appendChild(img);
  anchor.appendChild(span);

  web.appendChild(anchor);

  pages.appendChild(imageContainer);
  console.log(imageContainer);
})

});

// const nav = document.querySelector('nav');
/* const links = document.querySelector('.links');

const div = document.createElement('div');
div.classList.add('hamburger');
const image = document.createElement('img');
image.src = "../assets/shared/mobile/icon-hamburger.svg";
div.appendChild(image);

const nav = links.parentNode;
nav.replaceChild(div, links);
console.log(div); */