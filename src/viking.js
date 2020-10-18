// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health,
        this.strength = strength;
    };
    attack(){
        return this.strength
    };
    receiveDamage(damage){
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name
    };
    receiveDamage(damage){
        this.health -= damage
        if(this.health <= 0){
             
             return `${this.name} has died in act of combat`;
             
        }else{
            return `${this.name} has received ${damage} points of damage`;
        }
       
    };
    battleCry(){
        return "Odin Owns You All!";

    }
    
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    };
    receiveDamage(damage){
        this.health -= damage
        if(this.health <= 0){
             
             return `A Saxon has died in combat`;           
        }
            return `A Saxon has received ${damage} points of damage`
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    ;
    addViking(newViking){
        this.vikingArmy.push(newViking)
    };
    addSaxon(newSaxon){
        this.saxonArmy.push(newSaxon)
    };
    vikingAttack(){
        let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let saxon = this.saxonArmy[randomSaxonIndex];
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
        let result = saxon.receiveDamage(viking.strength);
        this.saxonArmy.splice(randomSaxonIndex, 1);
        return result;
    };
    
    saxonAttack(){  
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
        let viking = this.vikingArmy[randomVikingIndex];
        let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let result = viking.receiveDamage(saxon.strength);
        if(this.vikingArmy[randomVikingIndex].health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return result;
    };
    
    showStatus(){
        if(this.vikingArmy.length <= 0){
            console.log('Saxons have fought for their lives and survived another day...')
            return `Saxons have fought for their lives and survived another day...`;
        }else if(this.saxonArmy.length < 1){
            return `Vikings have won the war of the century!`;
        } else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
    }
    

let war = new War();
let rute = new Viking('Rute', 100, 43)
war.addViking(rute);
let mateus = new Viking('Mateus', 100, 33);
war.addViking(mateus);
let newSaxon = new Saxon(100, 29);
war.addSaxon(newSaxon);
war.saxonAttack();
war.showStatus();
console.log('first: ', war.vikingArmy, war.saxonArmy);
console.log('second: ', war.vikingArmy, war.saxonArmy);
console.log(war.saxonArmy.length);
console.log(war.vikingArmy.length)
