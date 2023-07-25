'use strict';

const Cart = function(arr = []) {
    this.goods = arr;
    this.totalPrice = 0;
    this.count = 0;
}

Cart.prototype.calculateGoodsPrice = function() {
    this.totalPrice = 0;
        if(this.goods) {
            this.goods.forEach((item) => {
                this.totalPrice += item.price * item.sum;
            });
        }
}

Cart.prototype.addGoods = function(product) {
    this.goods.push(product);
    this.getTotalPrice();
}

Cart.prototype.increaseCount = function() {
    this.goods.forEach((g) => {
        g.sum += 1;
    })
}

Cart.prototype.getTotalPrice = function(){
    this.totalPrice = 0;
    this.goods.forEach((item) => {
        this.totalPrice += item.price * item.sum;
    })
}

Cart.prototype.clear = function() {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
};


Cart.prototype.print = function () {
    this.getTotalPrice();
    const cartStr = JSON.stringify(this.goods); 
    console.log(cartStr);
    console.log("Общая стоимость корзины:" ,this.totalPrice);
}

const newCart = new Cart();
newCart.addGoods({
    nameItem: "Утюг",
    price: 500,
    sum: 3,
});

newCart.addGoods(
    {
        nameItem: "Комп",
        price: 2500,
        sum: 1,
    }
);
newCart.increaseCount();

newCart.print();

const Goods = function(price, name, discount){
    this.price = price;
    this.name = name;
    this.discount = discount;
}

const Burger = function(price,name,discount,FoodGoods = `1000ККал`){
    Goods.call(this,price,name,discount);
    this.FoodGoods = FoodGoods;
    this.type = 'eat';
};

Burger.prototype = new Goods();

const bigMac = new Burger('200$','bigMac','10%', '500ККал');

console.log(bigMac);