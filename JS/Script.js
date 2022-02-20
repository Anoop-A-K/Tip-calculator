const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change",calculateTip);


function calculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    tipPercent = tipPercent*10;
    let noOfPeople = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2); 

    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));
    
    let tipPerPerson = (totalTip/noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    console.log(noOfPeople, totalTip,total, tipPerPerson, totalPerPerson);

    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    
    if(tipPercent == 0){
        document.getElementById("tip-percent").textContent = `Poor ${tipPercent}%`;
    }else if(tipPercent == 10){
        document.getElementById("tip-percent").textContent = `Good ${tipPercent}%`;
    }else if(tipPercent == 20){
        document.getElementById("tip-percent").textContent = `Better ${tipPercent}%`;
    }else{
        document.getElementById("tip-percent").textContent = `Outstanding ${tipPercent}%`;
    }
    // document.getElementById("tBp-percent").textContent = `${tipPercent}%`;
    
    document.getElementById("split-num").textContent = noOfPeople;
    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
}

calculateTip();