const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
// const link = document.getElementById('link1');
// const link2 = document.getElementById('link2');
// const linkAll = document.querySelectorAll('#link');
const prev = document.querySelector('.prev');

// const btn = document.getElementById('btn');


// let results;
let startIndex = 0;
let endIndex = 15;
// let currentValue = 1;






// async function searchImages(){
//     keyword = searchBox.value;
//     const url = `https://restcountries.com/v3.1/all?fields=name,capital,flags`;
//     // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    
//     const response = await fetch(url);
//     const data = await response.json();

//     console.log(data, 'valuevaluevaluevvvaluevvvvvalue')
//     return data

// }

const getData = async () =>{
    // keyword = searchBox.value;
    const url = `https://restcountries.com/v3.1/all?fields=name,capital,flags`;

    
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data, 'valuevaluevaluevvvaluevvvvvalue')
    return data
}

let dataDisplay

let payload

const displayUsers = async (index) =>{
    payload = await getData();
    const searchPayload =  payload.filter((item) => item.name.common.toLowerCase().includes(index) )

    // console.log(searchPayload ,index , 'searchPayloadsearchPayloadsearchPayload')
    // French Polynesia 

    if(index === "Prev"){
        startIndex -= 15 
        endIndex -= 15

    }
   


    if(index === "Next"){
        startIndex += 15
        endIndex += 15
    }

    if(+index === 1){
        startIndex = 0
        endIndex = 15
    }

    if(+index === 2){
        startIndex = 15
        endIndex = 30
    }

    if(+index === 3){
        startIndex = 30
        endIndex = 45
    }

    if(+index === 4){
        startIndex = 45
        endIndex = 60
    }

    if(+index === 5){
        startIndex = 60
        endIndex = 75
    }

    if(+index === 6){
        startIndex = 75
        endIndex = 90
    }

    if(+index === 7){
        startIndex = 90
        endIndex = 105
    }

    if(+index === 8){
        startIndex = 105
        endIndex = 120
    }

    if(+index === 9){
        startIndex = 120
        endIndex = 135
    }

    if(+index === 10){
        startIndex = 135
        endIndex = 150
    }

    if(+index === 11){
        startIndex = 150
        endIndex = 165
    }

    if(+index === 12){
        startIndex = 165
        endIndex = 180
    }

    if(+index === 13){
        startIndex = 180
        endIndex = 195
    }

    if(+index === 14){
        startIndex = 195
        endIndex = 210
    }

    if(+index === 15){
        startIndex = 210
        endIndex = 225
    }

    if(+index === 16){
        startIndex = 225
        endIndex = 240
    }

    if(+index === 17){
        startIndex = 240
        endIndex = 255
    }


    dataDisplay =  payload.slice(startIndex , endIndex).map((item) => {
        const {name,capital, flags} = item;
    
        return`
                <div class="main">
                    <p> <span>Name:</span> ${name.common}</p>
                    <p><span>Capital:</span> ${capital}</p>
                    <img src="${flags.svg}" alt="" width="100%">
                </div>
        `
        }).join("");

        // console.log(active , 'activeactive')

 searchResult.innerHTML = dataDisplay;
}


const searchUsers = async (index) =>{
    const searchPayload =  payload.filter((item) => item.name.common.toLowerCase().includes(index) )

    dataDisplay =  searchPayload.slice(startIndex , endIndex).map((item) => {
        const {name,capital, flags} = item;
    
        return`
                <div class="main">
                    <p> <span>Name:</span> ${name.common}</p>
                    <p><span>Capital:</span> ${capital}</p>
                    <img src="${flags.svg}" alt="" width="100%">
                </div>
        `
        }).join("");


 searchResult.innerHTML = dataDisplay;
}


window.addEventListener( "load", () => {
    displayUsers();
})

let active



let header = document.getElementById("pagination");
let linkAll = header.querySelectorAll("#link");
for (let i = 0; i < linkAll.length; i++) {
    linkAll[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";

  
//   displayUsers(e.target.value);
  });
}


for(let i = 0 ; i < linkAll.length ; i++ ){
    
    linkAll[i].addEventListener("click", (e) =>{
        // const activeElement = e.target
        displayUsers(e.target.value)
        // if(index === "Next"){
        //     startIndex += 15
        //     endIndex += 15
        // }

    })
}

// prev.addEventListener('click',function(){
//     if(linkAll > 1){
//         for(1 of link){
//             1.current.remove("active")
//         }
//         linkAll--;
//         link[linkAll-1].current.add("active")
//     }
// })



searchBox.addEventListener("keydown", (e) =>{
    searchUsers(e.target.value)
})

