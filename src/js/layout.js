export function addFrame(){
    // Create the new div element
  let el = document.createElement('div');
  
  // Set any desired attributes or content for the div
  el.classList.add('frame');

  // Append the div to the body
  document.body.appendChild(el);
}