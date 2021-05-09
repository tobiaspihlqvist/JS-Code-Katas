import { sheesh } from "./test";

function component() {
    const element = document.createElement('p');
  
    element.innerHTML = ('Hello world');
  
    return element;
  }
  document.body.appendChild(component());


 