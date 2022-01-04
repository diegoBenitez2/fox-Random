import { registerImage } from "./lazy";  
import h from 'hyperscript';

const containerImages = document.getElementById('images');
const btnAddImages = document.createElement('button')
const btnCleanImages = document.createElement('button')
const refNode = document.querySelector("h2");
btnAddImages.className = "rounded-md py-3 px-5 my-4 text-sm text-white border-0 bg-blue-500 font-bold"
btnCleanImages.className = "rounded-md py-3 px-5 my-4 mx-4 text-sm text-blue-500 border-2 border-blue-500 font-bold"
btnAddImages.textContent = "Add images";
btnCleanImages.textContent = "Clean";
refNode.insertAdjacentElement('afterend',btnAddImages);
btnAddImages.insertAdjacentElement('afterend', btnCleanImages);
btnAddImages.addEventListener('click', addImage);
btnCleanImages.addEventListener('click', cleanImage);


async function addImage() {
  let newUrl  = await getImage()
  let newImage = renderImage(newUrl);
  containerImages.append(newImage);
  registerImage(newImage);
}
function cleanImage(){
  containerImages.innerHTML = ""
}
/* obtener una imagen random */
const getImage =  async () =>  {
  try {
    let request = await fetch('https://randomfox.ca/floof/');
    let response = await request.json()
    return response.image
  } catch (error) {
    alert('Ups!! There an error',error)
  }
}
const renderImage = (url) =>{
  /* Crear el contenedor de las imagenes */
  // let figure = document.createElement('figure');
  // let image = document.createElement('img');
  // let imageFail = document.createElement('div')
  /* Utilizando hyperscript */
  let figure = h("figure.my-4")
  let image = h("img.mx-auto.rounded-lg",{
    width: "320",
    "data-src": url,
  });
  let imageFail = h("div.bg-gray-100.rounded-lg.mx-auto", {
    width: "320",
    height: "320"
  })
  /* Agregar estilos */
  // imageFail.style.width = "320px";
  // imageFail.style.height = "320px";
  // imageFail.className = "bg-gray-100 rounded-lg mx-auto"
  // image.className = "mx-auto rounded-lg"
  figure.append(image, imageFail);
  return figure;
}



