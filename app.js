const readline = require("readline-sync");

class Player {
    constructor(status, hasStar){
        this.name = "";
        this.totalCoins = 0;
        this.status = status;
        this.statusOptions = ["Powered Up", "Big", "Small", "Dead"];
        this.hasStar = hasStar;
    }
    setName = () => {
        //MENU METHOD
        // let pickedName = false;
        // while (pickedName === false) {
        //     let namePicked = readline.keyIn("Welcome! Please Select Your Character: \n1) Mario \n2) Luigi \n");
        //     switch (namePicked) {
        //         case "1":
        //             pickedName = true;
        //             this.name = "Mario";
        //             break;
        //         case "2":
        //             pickedName = true;
        //             this.name = "Luigi"
        //             break;
        //         default:
        //             console.log("Please enter either '1' or '2'");
        //             break;
        //     } 
        // }
        //RANDOMIZED METHOD
        let namePicked = Math.floor(Math.random() * 2);
         switch (namePicked) {
            case 0:
                this.name = "Mario";
                break;
            case 1:
                this.name = "Luigi"
                break;
        } 
    }
    gotHit() {
        if (this.hasStar === true) {
            console.log("Your star protected you!\n");
            this.hasStar = false;
        }
        else if (this.status === this.statusOptions[0]){
            this.status = this.statusOptions[1];
        }
        else if (this.status === this.statusOptions[1]){
            this.status = this.statusOptions[2];
        }
        else if (this.status === this.statusOptions[2]){
            this.status = this.statusOptions[3];
            this.isDead();
        } 
    }
    gotPowerUp() {
        if (this.status === this.statusOptions[0]){
            console.log(`Congratulations! You got a star! \nName: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \nYou have a Star\n`)
            this.hasStar = true;
        } else if (this.status === this.statusOptions[1]){ 
            this.status = this.statusOptions[0];
        } else if (this.status === this.statusOptions[2]) { 
            this.status = this.statusOptions[1];
        }
    }
    addCoin = () => {
        this.totalCoins ++;    
    }
    print = () => {
        if (this.hasStar === true){
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins} \nYou have a Star\n`)
        } else {
            console.log(`Name: ${this.name} \nStatus: ${this.status} \nTotal Coins: ${this.totalCoins}\n`)
        }
    }
    isDead = () => {
        console.log(`Game Over, ${this.name}!`)
        clearInterval(randomRange);
    }
}

const player = new Player("Big", false);
player.setName()
const randomRange = setInterval (() => {
    player.print()
    let selectRandom = Math.floor(Math.random() * 3)
    switch (selectRandom) {
        case 0:
            player.gotHit();
            break;
        case 1:
            player.gotPowerUp();
            break;
        case 2:
            player.addCoin();
            break;
        }
    }, 1000);



    // gotPowerUp() {
    //     if (this.status === "PowerUp") this.hasStar = true;
    //     else if (this.status === "Big") this.status = "PowerUp";
    //     else this.status = "Big";
    // }
