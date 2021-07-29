//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const container = document.querySelector("#dog-image-container")

fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => addImageElements(data.message))
//.then(data => console.log(data.messazge))
//.catch(err => console.log("We Got An Error.", err));

//adds image to DOM for each image of the array
function addImageElements(imgArray) {
    const container = document.querySelector("#dog-image-container");   //attach stuff to this location
    imgArray.forEach((img) => {

    });
}

// function renderImages(image) {
//     const container = document.querySelector('#dog-image-container')
//     image.forEach
// }

// function getImage() {
//     fetch(imgUrl)
//     .then(response => response.json())
//     .then(images => {                   //2nd .then cb function for DOM manip
//         const imgs = images.message
//         //take array of images
//         //turn it into image elements
//         let imgsArray = imgs.map(img => {
//             let i = `<img src=${img}>` //template literal
//             return i
//          })
//         //then append each element to DOM 'container'
//         imgsArray.forEach(element => {
//             container.innerHTML += element;         //use innerHTML since we used a template literal
//                                                     //which deals with strings and not nodes
//         })      


//     })
// }   
// getImage();

