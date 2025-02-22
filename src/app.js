import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our', 'its', 'your', 'their'];
let adj = ['great', 'big', 'short', 'little', 'amazing'];
let noun = ['jogger', 'racoon', 'apple', 'mountain', 'guitar'];

function generateDomains(pronoun, adj, noun) {
  let domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domains.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  return domains;
}



window.onload = function() {
  //write your code here
  console.log(generateDomains(pronoun, adj, noun));
  document.querySelector('#domains').innerHTML = generateDomains(pronoun, adj, noun);
};
