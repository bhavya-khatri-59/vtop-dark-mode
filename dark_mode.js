// contentScript.js

console.log("dark mode loaded!");

green = "90deg"
yellow = "40deg"

// Define your CSS styles
const styles = `

html:not(.modal-open) {
  background-color: #FFF !important;
  filter: invert(100%) hue-rotate(90deg) brightness(100%) contrast(85%);
  -webkit-filter: invert(100%) hue-rotate(90eg) brightness(100%) contrast(85%);
}

body:not(.modal-open) {
  background-color: #FFF !important;
}

.dbutton {
  background-color: #0d6efd;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  border: none;
  color: white;
}

em, svg, embed, form, audio, object, button, canvas, figure:empty {
  filter: invert(0%) hue-rotate(90deg) !important;
  -webkit-filter: invert(0%) !important;
}

img, image, em, embed,.img-rounded {
  filter: invert(100%) hue-rotate(270deg) !important;
  -webkit-filter: invert(100%) hue-rotate(270deg) !important;
} 

form em, form img, form svg, form image, form video, form embed, form object, form button, form canvas, form figure:empty {
  filter: invert(0) !important;
  -webkit-filter: invert(0) !important;
}

.img:empty, .btn:empty, .logo:empty, .image:empty, .photo:empty, .button:empty, [role='button'], input[type='checkbox'], [style*='background:url']:not(html):not(body):not(input), [style*='background: url']:not(html):not(body):not(input), [style*='background-image']:not(html):not(body):not(input) {
  filter: invert(100%) hue-rotate(270deg) !important;
  -webkit-filter: invert(100%) hue-rotate(270deg) !important;
}

:-webkit-full-screen img, :-webkit-full-screen svg, :-webkit-full-screen video, :-webkit-full-screen embed, :-webkit-full-screen object, :-webkit-full-screen canvas, :-webkit-full-screen button {
  filter: invert(0%) !important;
  -webkit-filter: invert(0%) !important;
}

:-moz-full-screen img, :-moz-full-screen svg, :-moz-full-screen video, :-moz-full-screen embed, :-moz-full-screen object, :-moz-full-screen canvas, :-moz-full-screen button {
  filter: invert(0%) !important;
  -webkit-filter: invert(0%) !important;
}

.VITEmblem, .modal {
  filter: invert(0%) !important;
  -webkit-filter: invert(0%) !important;
}

`;

// Create a <style> element
const styleElement = document.createElement('style');
styleElement.textContent = styles;

//img = document.querySelector('.VITEmblem');
//img.style.filter = "invert(0%)";

// Inject the <style> element into the <head> of the document
document.head.appendChild(styleElement);

// Function to remove embed#tes
// Remove modal backdrop if present
function removeBackdrop() {
  document.querySelectorAll(".modal-backdrop.show").forEach(el => el.remove());
}

// Run once in case it's already present
removeBackdrop();

// Observe DOM changes
const observer = new MutationObserver(() => {
  removeBackdrop();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});


