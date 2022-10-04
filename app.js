import data from "./data.json" assert {type: "json"}

let chartBarsContainer = document.querySelector(".chart__bars-container")
let maxBarHeight = 150;

let values = [];

data.forEach(element => {
    values.push(element.amount)
    chartBarsContainer.innerHTML +=
    `<div class="chart__bar">
    <div class="chart__bar--label">$${element.amount} </div>
    <div class="chart__bar--day">${element.day}</div>
  </div>`
})

let maxValue = Math.max(...values);

let bars = document.querySelectorAll(".chart__bar")
bars = [...bars]


bars.forEach(bar => {

    let actualExpense = bar.childNodes[1].innerText
    let actualExpenseNumber = parseFloat(actualExpense.slice(1));

    let alturaActual = actualExpenseNumber * maxBarHeight / maxValue
    bar.style.height = `${alturaActual}px`

    if(maxValue == actualExpenseNumber){
        bar.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }
    bar.addEventListener("mouseover", e => {
        let label = e.target.childNodes[1]
        label.style.display = "block"
    })
    bar.addEventListener("mouseout", e =>{
        let label = e.target.childNodes[1]
        label.style.display = "none"
    })
})
