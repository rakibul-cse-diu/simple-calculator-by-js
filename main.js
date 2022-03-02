const dispalyNumber = document.querySelector(".display-cal")
const dispalyCalculation = document.querySelector(".display-result")
const calBtn = document.querySelectorAll(".cal-btn")

let haveDote = false;

calBtn.forEach(btn => {

    btn.addEventListener("click", function (e) {
        const triggeredBtn = e.target.innerText;
        console.log(triggeredBtn)

        if (triggeredBtn == "=") {
            dispalyCalculation.innerText = eval(dispalyNumber.innerText);
            haveDote = false;
        }
        if (triggeredBtn != "=" && triggeredBtn != "C" && triggeredBtn != "DEL") {
            if (triggeredBtn == "." && !haveDote) {
                haveDote = true;
            }
            else if (triggeredBtn == "." && haveDote) {
                return
            }
            dispalyNumber.innerText = dispalyNumber.innerText + triggeredBtn;
        }
        if (triggeredBtn == "C") {
            dispalyCalculation.innerText = "";
            dispalyNumber.innerText = "";
        }
        if (triggeredBtn == "DEL") {
            dispalyNumber.innerText = dispalyNumber.innerText.slice(0, -1);
        }


    })
})
