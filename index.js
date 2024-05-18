//text base Advanture game in typescript and Node.js
//this project is no GUI based. It is a console-based game.
import inquirer from "inquirer";
//for Hero
class players {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        let fuel = 100;
    }
}
//for Enemy
class opponents {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        let fuel = 100;
        this.fuel = fuel;
    }
}
// step 2 hero object
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: " Enter your Hero Name"
    }
]);
///enemy object
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        choices: ["Alien", "Zoombie", "Witch"],
        message: "Select the enemy you fight with:",
    }
]);
///step 3 battle field
let p1 = new players(player.name);
let ol = new opponents(opponent.select);
//step 4 ..Alien
do {
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "drink portion", "run for life"]
            }
        ]); //if2
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${ol.name} fuel is ${ol.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose better luck next time");
                    process.exit();
                }
            }
            //if3
            if (num <= 0) {
                ol.fuelDecrease;
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${ol.name} fuel is ${ol.fuel}`);
                if (ol.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
        }
        //right code
        if (ask.opt == "drink portion") {
            p1.fuelincrease();
            console.log(`You Drink Health portion your fuel is ${p1.fuel} `);
        }
        if (ask.p1 == "run for life") {
            console.log(`YOU loose. Better luck next time`);
            process.exit();
        }
    }
    //zoombie
    if (opponent.select == "Zoombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "drink portion", "run for life"]
            }
        ]); //if2
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${ol.name} fuel is ${ol.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose better luck next time");
                    process.exit();
                }
            }
            //if3
            if (num <= 0) {
                ol.fuelDecrease;
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${ol.name} fuel is ${ol.fuel}`);
                if (ol.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
        }
        //right code
        if (ask.opt == "drink portion") {
            p1.fuelincrease();
            console.log(`You Drink Health portion your fuel is ${p1.fuel} `);
        }
        if (ask.p1 == "run for life") {
            console.log(`YOU loose. Better luck next time`);
            process.exit();
        }
    }
    // witch
    if (opponent.select == "Witch") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack", "drink portion", "run for life"]
            }
        ]); //if2
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${ol.name} fuel is ${ol.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose better luck next time");
                    process.exit();
                }
            }
            //if3
            if (num <= 0) {
                ol.fuelDecrease;
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${ol.name} fuel is ${ol.fuel}`);
                if (ol.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
        }
        //right code
        if (ask.opt == "drink portion") {
            p1.fuelincrease();
            console.log(`You Drink Health portion your fuel is ${p1.fuel} `);
        }
        if (ask.p1 == "run for life") {
            console.log(`YOU loose. Better luck next time`);
            process.exit();
        }
    }
} while (true);
