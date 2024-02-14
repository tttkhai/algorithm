class Burger {
    constructor() {
    }

    setCheese(cheese) {
        this.cheese = cheese;
    }

    setBread(bread) {
        this.bread = bread;
    }
}


class BurgerBuilder {
    constructor() {
        this.burger = new Burger();
    }

    addCheese(cheese) {
        this.burger.setCheese(cheese)
        return this;
    }

    addBread(bread) {
        this.burger.setBread(bread)
        return this;
    }

    build() {
        return this.burger;
    }
}

const order = new BurgerBuilder().addCheese("yellow").build();
console.log(order);