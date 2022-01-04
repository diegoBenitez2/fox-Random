const isIntersecting = (entry) => {
  return entry.isIntersecting
}

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.firstChild;
  const imageFake = container.lastChild;
  const url = image.dataset.src;
  /* Cargar imagen */
  image.src = url
  image.onload  = function(){
    imageFake.style.display = "none";
  }
  /* Des registra la imagen */
  observer.unobserve(container)
}
const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(loadImage)
})
/* Registrar imagen */
export const registerImage = (imagen)=> {
  //Intersection Observer
  observer.observe(imagen)
}