const gridStuff = [
    {
        image: "/starter-code/assets/app-design/desktop/image-airfilter.jpg",
        name: "Airfilter",
        use : "Solving the problem of poor indoor air quality by filtering the air"
    },
    {
        image : "/starter-code/assets/app-design/desktop/image-eyecam.jpg",
        name : "Eyecam",
        use : "Product that lets you edit your favorite photos and videos at any time"
    },
    {
        image: "/starter-code/assets/app-design/desktop/image-faceit.jpg",
        name: "Faceit",
        use: "Get to meet your favorite internet superstar with the faceit app"
    },
    {
        image: "/starter-code/assets/app-design/desktop/image-todo.jpg",
        name: "Todo",
        use: "A todo app that features cloud sync with light and dark mode"
    },
    {
        image: "/starter-code/assets/app-design/desktop/image-loopstudios.jpg",
        name: "Loopstudios",
        use: "A VR experience app made for Loopstudios"
    }
];


const box = document.querySelector(".box");

const innerBox = document.createElement("div");
innerBox.classList.add("innerbox");

const boxImage = document.createElement("div");
boxImage.classList.add("in_img");
innerBox.appendChild(boxImage);

const words = document.createElement("div");
words.classList.add("words");

console.log(innerBox);
// for(let i=0; i<gridStuff.length; i++) {
//     console.log(gridStuff[i]);
// }