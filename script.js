import { pokemons } from './pokemons.js';
const qidiruvInput = document.getElementById("qidiruv");
const btn = document.getElementById("btn");
const select = document.getElementById("select-type");
const selectSort=document.getElementById("sort")

// console.log(pokemons.sort((a,b)=> a.name.localeCompare(b.name)));

// for (let i = 0; i <= 15; i++) {
//   console.log(i)

// }


const box = document.getElementById("box")

function pokimonView(data) {
  box.innerHTML = "";
  data.forEach(e => {
    const div = document.createElement("div");
    div.classList.add("pokimon");
    div.innerHTML = `
              <h2>${e.name}</h2>
                <img src="${e.img}" alt="vcx"> <br>
                <button class="btn2">${e.type}</button>
                <h2>Candy count: ${e.candy_count}</h2>
                <h3>${e.weight}</h3>
                <h3>${e.weaknesses}</h3>
                <h4 class="clock">${e.spawn_time}</h4>
                <h4 class="id">${e.id}</h4>
           `;
    box.appendChild(div)
  });
}
pokimonView(pokemons)

btn.addEventListener("click", () => {
  if (qidiruvInput.value.trim().length < 1) {
    alert("Hurmatli User biror narsa yozing aks holda you can have problems!!!")
  } else {
    let searchPk = pokemons.filter(e => e.name.toLowerCase().includes(qidiruvInput.value.toLowerCase().trim()));
    pokimonView(searchPk);
  }
})
// qidiruvInput.addEventListener("input", () => {
//   if (qidiruvInput.value.trim().length < 1) {
//     alert("Hurmatli User biror narsa yozing aks holda you can have problems!!!")
//   } else {
//     let searchPk = pokemons.filter(e => e.name.toLowerCase().includes(qidiruvInput.value.toLowerCase().trim()));
//     pokimonView(searchPk);
//   }
// })

select.addEventListener("change",()=>{
  if(select.value=="All"){
    pokimonView(pokemons)
  }else{
  let searchPk=pokemons.filter(e=>e.weaknesses.toString().includes(select.value));
  pokimonView(searchPk)}
})

selectSort.addEventListener("click",()=>{
  if(selectSort.value=="A-Z"){
    let changePokemons=pokemons.sort((pk1,pk2)=>pk1.name.localeCompare(pk2.name));
    pokimonView(changePokemons)
  }else{
    let changePokemons=pokemons.sort((pk1,pk2)=>pk2.name.localeCompare(pk1.name));
    pokimonView(changePokemons)
  }
})
-pppo