const dispalyNumber = document.querySelector(".display-cal")
const dispalyCalculation = document.querySelector(".display-result")
const calBtn = document.querySelectorAll(".cal-btn")


console.log(calBtn)

calBtn.forEach(btn => {
    let array = [btn.innerText];
    if (array.includes("C")) {
        console.log("paisi")
    } else {
        console.log("nah");
    }
})