// const navItems = ['Our Company', 'Locations', 'Contact'];


// const navbar = document.querySelector('.navbar');


const containerItems = [
    {
        name: 'Tim Brown',
        img: '../assets/graphic-design/desktop/change.jpg',
        title: 'TIM BROWN',
        description: ' A book cover designed for Tim Brown’s new release, ‘Change’'
      },
      {
        name: 'Boxed water',
        img: '../assets/graphic-design/desktop/boxed-water.jpg',
        title: 'BOXED WATER',
        description: 'A simple packaging concept made for Boxed Water'
      },
      {
        name: 'Science',
        img: '../assets/graphic-design/desktop/science.jpg',
        title: 'SCIENCE!',
        description: 'A poster made in collaboration with the Federal Art Project'
      }
]

const gridContainer = document.querySelector('.container');
containerItems.forEach(item => {
    const containerItem = document.createElement('div');
  containerItem.classList.add('grid-item');
  containerItem.innerHTML = `
  <img src="${item.img}" alt="${item.name}">
  <h2>${item.title}</h2>
  <p>${item.description}</p>`;
  gridContainer.appendChild(containerItem);
  return containerItem;
})

const designItems = [
    {
        title: 'App Design',
        text: 'View Projects >'
    }
    
]

const gridItems = document.querySelector('.Designs');
designItems.forEach(item => {
    const designItem = document.createElement('div');
    designItem.classList.add('design-item');
    designItem.innerHTML =`
    <h2>${item.title}</h2>
    <button>${item.text}</button>`;
    gridItems.appendChild(designItem);
    return designItem;
})

const designItem = [
    {
        title: 'Web Design',
        text: 'View Projects >'
    }
]
const gridItem = document.querySelector('.Designs');
designItem.forEach(item => {
    const designItem = document.createElement('div');
    designItem.classList.add('design-item1');
    designItem.innerHTML =`
    <h2>${item.title}</h2>
    <button>${item.text}</button>`;
    gridItems.appendChild(designItem);
    return designItem;
})


