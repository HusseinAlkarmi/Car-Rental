'use srtict'
let form = document.getElementById('form');
let table = document.getElementById('table');

let list = [];
let carsArr = ['kia.jpg', 'ford.jpg', 'bmw.jpg'];

function Car(customerName, carModel){
    this.customerName = customerName;
    this.carModel = carModel;
    this.price = 0;

    this.randomPrice = function(){
        this.price = Math.ceil(Math.random() * (10000-1000)+1000);
    }

    list.push(this)
    addToLocalStorage();
}

form.addEventListener('submit', handler);

function handler(event){
    event.preventDefault();
    let newCustomerName = event.customerName.value;
    let newCarModel = event.CarModel.value;

    let order = new Car(newCustomerName, newCarModel);
    order.render();
};



let tableHeader = document.createElement('tr');
table.appendChild(tableHeader);

function getTableHeader(){
    let orderImage = document.createElement('th');
    tableHeader.appendChild(orderImage);
    orderImage.textContent = "order image";

    let orderDetails = document.createElement('th');
    tableHeader.appendChild(orderDetails);
    orderDetails.textContent = "order details";
}

renderTableHeader();

Car.prototype.render = function(){

    let row = document.createElement('tr');
    table.appendChild('row');

    let imgEl = document.createElement('td');
    let orderImg = document.createElement('img');
    orderImg.setAttribute ('src', `img/${this.carModel}.jpg`);
    
    imgEl.appendChild('orderImg');
    row.appendChild('imgEl');


    let detailsOrder = document.createElement('td');
    row.appendChild('detailsOrder');
    detailsOrder.textContent = `customer name: ${this.customerName} car model: ${this.carModel} car price: ${this.price}`;
}

function addToLocalStorage(){
    let storage = JSON.stringify(list);
    localStorage.setItem('Item', storage);

}

function getFromLocalStorage(){
    let Item = localStorage.getItem('Item');
    let getting = JSON.getting(Item);

    if( getting != null){
        for(let i =0; i< getting.length; i++){
            let re = new Car(getting[i].customerName, getting[i].carModel,getting[i].this.price)
            Car[i].render();
        }
    }
}

getFromLocalStorage();