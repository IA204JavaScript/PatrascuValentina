class Item {
     constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }
    getInfo() {
        return `Название: ${this.name}, Вес: ${this.weight}, Редкость: ${this.rarity}`;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}
function chooseRarity() {
    const rarities = ["common", "uncommon", "rare", "legendary"];
    const validChoices = [1, 2, 3, 4];

    while (true) {
        const rarityChoice = parseInt(
            prompt(`Выберите редкость предмета:1. common 2. uncommon 3. rare 4. legendary`)
        );
        if (validChoices.includes(rarityChoice)) {
            return rarities[rarityChoice - 1];
        } else {
            alert("цифры нет в списке, пробуйте заново");
        }
    }
}

class Weapon extends Item {
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    use() {
        if (this.durability > 0) {
            this.durability -= 10;
            if (this.durability < 0) {
                this.durability = 0;
            }
            console.log(`использовано оружие - "${this.name}". прочность - 10. прочность: ${this.durability}`);

        } else {
            console.log(`оружие сломано - ${this.name} `);
        }
    }
    repair() {
        this.durability = 100;
        console.log(`оружие "${this.name}" отремонтировано. прочность восстановлена до 100.`);

    }

    getInfo() {
        return `${super.getInfo()}, Урон: ${this.damage}, Прочность: ${this.durability}`;
    }
}


function main() {
    const objectType = prompt(
        "выберите цифру для создания объекта, введите 1 для Item, 2 для Weapon:"
    );

    const name = prompt("название предмета - ");
    const weight = parseFloat(prompt("вес предмета - "));
    const rarity = chooseRarity();

    if (objectType === "1") {
            const item = new Item(name, weight, rarity);
            console.log(`объект Item - \n ${item.getInfo()}`);
            alert(`объект Item - \n ${item.getInfo()}`);
            const newWeight = parseFloat(prompt("введите новый вес -"));
            item.setWeight(newWeight);
            console.log(`вес был изменён на ${newWeight}. обновлённая инфо: ${item.getInfo()}`);


    } else if (objectType === "2") {
        const damage = parseInt(prompt("урон оружия - "));
        const durability = parseInt(prompt("прочность оружия - "));
        const weapon = new Weapon(name, weight, rarity, damage, durability);
        alert(`ваш объект Weapon - \n${weapon.getInfo()}`);
        weapon.use();
        weapon.repair();
        console.log(`инфо о Weapon:\n${weapon.getInfo()}`);
    } else {
        alert("выбирайте из предложенных вариантов");
    }
}

main();