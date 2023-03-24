

function add(num1, num2){
    console.log('The sum is: ', num1+num2)
}


function joined(){
    let title = document.getElementById('title');
    title.innerText = 'Thanks for joining!!';
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

function usdToInr(){
    let usd = document.getElementById('usd').value;
    let inr = (usd * 82.65);
    document.getElementById('inr').value = inr;
}

function split(){
    let amount = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let result = (amount / persons).toFixed(2);
    document.getElementById('result').innerText = result
}
