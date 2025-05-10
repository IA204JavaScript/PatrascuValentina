## Лабораторная Работа №3

### Цель работы
Познакомиться с классами и объектами в JavaScript, 
научиться создавать классы, использовать конструкторы и методы,
а также реализовать наследование.

#### Шаг 1. Создание класса `Item`
Создайте класс `Item`, который будет представлять предмет в инвентаре.

- **Поля класса**:
    - `name` – название предмета.
    - `weight` – вес предмета.
    - `rarity` – редкость предмета (`common`, `uncommon`, `rare`, `legendary`).
- **Методы**:
    - `getInfo()` – возвращает строку с информацией о предмете.
    - `setWeight(newWeight)` – изменяет вес предмета.
### Реализация шага 1
```
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
            prompt(`Выберите редкость предмета:1. common 2. uncommon 3. rare 4. legendary`),
            10
        );
        if (validChoices.includes(rarityChoice)) {
            return rarities[rarityChoice - 1];
        } else {
            alert("цифры нет в списке, пробуйте заново");
        }
    }
}

```
### Шаг 2. Создание класса `Weapon`
Создайте класс `Weapon`, который расширяет `Item`.

- **Дополнительные поля**:
    - `damage` – урон оружия.
    - `durability` – прочность (от 0 до 100).
- **Методы**:
    - `use()` – уменьшает `durability` на 10 (если `durability > 0`).
    - `repair()` – восстанавливает `durability` до 100.
### Реализация шага 2
```
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
```

### Шаг 3. Тестирование
1. Создайте несколько объектов классов `Item` и `Weapon`.
2. Вызовите их методы, чтобы убедиться в правильности работы.
### Реализация шага 3
```
function main() {
    const objectType = prompt(
        "выберите цифру для создания объекта, введите 1 для Item, 2 для Weapon:"
    );

    const name = prompt("название предмета - ");
    const weight = parseFloat(prompt("вес предмета - "));
    const rarity = chooseRarity();

    if (objectType === "1") {
            const item = new Item(name, weight, rarity);
            console.log(`объект Item - \n${item.getInfo()}`);
            alert(`объект Item - \n${item.getInfo()}`);
            const newWeight = parseFloat(prompt("введите новый вес -"));
            item.setWeight(newWeight);
            console.log(`вес был изменён на ${newWeight}. обновлённая инфо: ${item.getInfo()}`);


    } else if (objectType === "2") {
        const damage = parseInt(prompt("урон оружия - "), 10);
        const durability = parseInt(prompt("прочность оружия - "), 10);
        const weapon = new Weapon(name, weight, rarity, damage, durability);
        alert(`ваш объект Weapon - \n${weapon.getInfo()}`);
        weapon.use();
        weapon.repair();
        console.log(`инфо о Weapon:\n${weapon.getInfo()}`);
    } else {
        alert("выбирайте из предложенных вариантов");
    }
}

```


### Контрольные вопросы
1. Какое значение имеет `this` в методах класса?
```
`this` в методах класса указывает на текущий экземпляр класса,
который вызвал метод. Это позволяет методам обращаться к свойствам
или другим методам объекта, используя контекст этого экземпляра.
```
2. Как работает модификатор доступа `#` в JavaScript?
```
Модификатор доступа `#` делает свойство или метод класса 
приватным, что означает, что они доступны только внутри самого класса. 
Попытка доступа к таким полям вне класса вызовет ошибку.
```
3. В чем разница между `классами` и `функциями-конструкторами`?
```
Классы предоставляют более понятный и современный синтаксис для
создания объектов и наследования, сохраняя при этом фоновую реализацию
через прототипы. Функции-конструкторы, используемые раньше для тех же
целей, требуют явного обращения с прототипами и менее удобны в 
использовании.
В классах методы сразу объявл внутри тела, но в обоих случаях методы определ через prototype.
Класс нельзя вызывать без new. ```