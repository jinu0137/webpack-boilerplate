import hello_word from "./hello";
import world_word from "./world.js";
import css from "./style.css";

document.querySelector('#root').innerHTML = `index: ${hello_word} ${world_word}`;