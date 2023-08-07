const fromCurrency = document.getElementById('fromCurrency')
const toCurrency = document.getElementById('toCurrency')
const btnTrade = document.getElementById('btnTrade') 
const btnConverter = document.getElementById('btn-converter')


// API
let APIKEY = 'e019da0fb50bd71496b493e4'
let api = `https://v6.exchangerate-api.com/v6/${APIKEY}/latest/USD`
fetch( api )
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))

currencies.forEach(currency => {
    const option = document.createElement('option')
    option.value = currency
    option.innerText = currency
    fromCurrency.appendChild(option)
})


currencies.forEach(currency => {
    const option = document.createElement('option')
    option.value = currency
    option.innerText = currency
    toCurrency.appendChild(option)
})

let calculate = () => {
    const amount = document.getElementById('amount').value
    const fromCurrency = document.getElementById('fromCurrency').value
    const toCurrency = document.getElementById('toCurrency').value
    const result = document.getElementById('result')

    //si el monto es diferente de 0 
    if (amount != 0) {
        //endpoint para la conversion : https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP
        fetch(`https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${fromCurrency}/${toCurrency}/${amount}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                result.innerHTML = `${amount} ${fromCurrency} = ${data.conversion_rate} ${toCurrency}`
            })
    //si el monto es 0
    } else {
        alert('Ingrese un monto')
    }
}

btnTrade.addEventListener('click', () => {
    let aux = fromCurrency.value
    fromCurrency.value = toCurrency.value
    toCurrency.value = aux
})


btnConverter.addEventListener('click', calculate)