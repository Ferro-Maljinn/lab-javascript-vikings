// Soldier
class Soldier {
  //should receive 2 arguments (health & strength)
  constructor(health, strength) {
    //should receive the health property as its 1st argument
    this.health = health;

    //should receive the strength property as its 2nd argument
    this.strength = strength;
  }

  //should be a declared with 0 arguments
  attack() {
    //should return the strength property of the Soldier
    return this.strength;
  }

  //should be a declared with 1 argument
  receiveDamage(damage) {
    /* | this.health -= damage | <-- same line below */
    this.health = this.health - damage;
  }
}

// Viking | should inherit from Soldier
class Viking extends Soldier {
  //should receive 3 arguments (name, health & strength)
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
  }

  receiveDamage(damage) {
    //should remove the received damage from the health property
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }

    //if the Viking dies `...`
    else if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    }
  }

  //should return "Odin Owns You All!"
  battleCry() {
    return "Odin Owns You All!"
  }
}


// Saxon | Should extend Soldier and receive one argument (damage)
class Saxon extends Soldier {
  receiveDamage(damage) {
    //should remove the received damage from the health property
    this.health = this.health - damage;

    //if the Saxon is still alive, return `...`
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }

    //if the Saxon dies `...` 
    else if (this.health <= 0) {
      return "A Saxon has died in combat"
    }
  }
}

//should make Saxon receiveDamage() equal to the strength of a Viking
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    //(Viking - chosen at random) 
    const indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[indexViking];

    //(Saxon - chosen at random) 
    const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[indexSaxon];

    //Saxon - receiveDamage() should equal strength of a Viking
    const absolutDMG = randomSaxon.receiveDamage(randomViking.strength);

    //should remove dead Saxons from the saxonArmy
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(indexSaxon);
    }
    //should return result of calling receiveDamage() of a Saxon
    return absolutDMG
  }

  saxonAttack() {
    //(Viking - chosen at random) 
    const indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[indexViking];

    //(Saxon - chosen at random) 
    const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[indexSaxon];

    //Viking receiveDamage() should equal strength of a Saxon
    const absolutDMG = randomViking.receiveDamage(randomSaxon.strength);

    //should remove dead Vikings from the vikingArmy
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(indexViking);
    }
    //should return result of calling receiveDamage() of a Viking
    return absolutDMG
  }

  showStatus() {
    //If this.saxonArmy is empty:
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    }
    // If vikingArmy is empty:
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    }

    // If War includes at least 1 Viking and 1 Saxon:
    // if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) { return "Vikings and Saxons are still in the thick of battle."} 
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

//_______________________________________________________________________________________________________________________________________________

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
