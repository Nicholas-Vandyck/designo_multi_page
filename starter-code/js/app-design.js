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
  console.log(box);
});

const pagesLinks = [
  {
    title: "Web Design",
    description: "View Projects"
  },
  {
    title: "Web Design",
    description: "View Projects" 
  }
]

  

