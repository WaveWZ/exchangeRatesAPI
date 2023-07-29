class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency= firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/v1/latest?access_key=8b27a95677f4c89969f98ca17c89d724&base=";
        this.amount = null;
    }

    exchange(){
        fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            const parity = data.rates[this.secondCurrency];
            const amount2 = Number(this.amount)

            const total = parity * amount2;

            resolve(total);
        })
        .catch(err => console.log(err))
    }
}
