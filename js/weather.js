const btn = document.getElementById("search");
const div = document.querySelector('.app');
const con = document.getElementById('outer');
const btn2 = document.getElementById('again');
let value;
btn.addEventListener('click',(e)=>{
    const txt = document.getElementById("text");

    e.preventDefault()

    if(txt.value==""){
        alert("Invalid input")
        window.location.reload()
    }

    if(div.classList.contains('app')){
        div.classList.add('show')
        con.style.display="none"
    }
    
    // console.log(txt.value);
    value=txt.value;

    let data;
    fetch(`http://api.weatherapi.com/v1/current.json?key=ff19bff5841a489591e101607211304&q=${value}&aqi=no`)
    .then(e=>e.json()).then((e)=>{
    data=e;
    // console.log(data);

    let myData = '';
    const card = `<div class="card">
                    <h1 class="heading">${data.location.name}</h1>
                    <h2 class="innerHeading">${data.location.country}</h2>
                    <img src=${data.current.condition.icon} alt="img">
                    <h3 class="temperature">${data.current.temp_c}&#8451;</h3>
                    <button id="again" onclick="again()">Search Again</button>
                  </div>`;
    myData+=card;
    document.querySelector(".app").innerHTML=myData;
}).catch((err)=>{
    console.log(err);
})
})

function again(){
    if(div.classList.contains("app")){
        div.classList.remove("show")
        con.style.display="flex"
    }
    document.getElementById("text").value="";
}