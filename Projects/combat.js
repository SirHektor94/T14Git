<script>
const PlayerCharacter = {
    Name: "Baldur",
    HP: 200,
    Armor: 2,
    MinDmg: 10,
    MaxDmg: 20,
    Block: 40,
    Dodge: 8,
};

const Adversaries = [
    {
        Name: "Skeleton",
        HP: 100,
        Armor: 5,
        MinDmg: 3,
        MaxDmg: 8,
        Block: 20,
        Dodge: 5,
    },
    {
        Name: "Ork",
        HP: 100,
        Armor: 0,
        MinDmg: 15,
        MaxDmg: 20,
        Block: 10,
        Dodge: 10,
    },
    {
        Name: "Goblin",
        HP: 30,
        Armor: 2,
        MinDmg: 5,
        MaxDmg: 7,
        Block: 0,
        Dodge: 35,
    },
];

let PlayerIndex = 0;
let AdversaryIndex = 0;

function AttackPl(Attacker, Defender) {
    let Dmg = Math.round(Math.random() * (Attacker.MaxDmg - Attacker.MinDmg) + Attacker.MinDmg - Defender.Armor);
    if (Math.round(Math.random() * 100) < Defender.Block) {
        console.log("The attack was blocked by the target");
    } else if (Math.round(Math.random() * 100) < Defender.Dodge) {
        console.log("The attack was dodged by the target");
    } else {
        console.log("The attack hit the target");
        Defender.HP -= Dmg;
        console.log("The " + Defender.Name + "'s HP is reduced to:" + Defender.HP);
       
    }
}

function AttackAd(Attacker, Defender) {
    let Dmg = Math.round(Math.random() * (Attacker.MaxDmg - Attacker.MinDmg) + Attacker.MinDmg - Defender.Armor);
    if (Math.round(Math.random() * 100) < Defender.Block) {
        console.log("The attack was blocked by the target");
    } else if (Math.round(Math.random() * 100) < Defender.Dodge) {
        console.log("The attack was dodged by the target");
    } else {
        console.log("The attack hit the target");
        Defender.HP -= Dmg;
        console.log("The " + Defender.Name + "'s HP is reduced to:" + Defender.HP);
        
    }
}

function PlayerAtk(Attacker, Defender) {
    console.log("The " + Attacker.Name + " attacks " + Defender.Name + ":");
}

function MonsterAtk(Attacker, Defender) {
    console.log("The " + Attacker.Name + " attacks " + Defender.Name + ":");
}

while (PlayerCharacter.HP > 0 && Adversaries[AdversaryIndex].HP > 0) {
    PlayerAtk(PlayerCharacter, Adversaries[AdversaryIndex]);
    AttackPl(PlayerCharacter, Adversaries[AdversaryIndex]);
    if (Adversaries[AdversaryIndex].HP <= 0) {
        console.log("The " + Adversaries[AdversaryIndex].Name + " has perished!");
        AdversaryIndex++;
        if (AdversaryIndex >= Adversaries.length) {
            console.log("All adversaries have been defeated!");
            break;
        }
    } else {
        MonsterAtk(Adversaries[AdversaryIndex], PlayerCharacter);
        AttackAd(Adversaries[AdversaryIndex], PlayerCharacter);
        if (PlayerCharacter.HP <= 0) {
            console.log("The " + PlayerCharacter.Name + " has perished!");
            break;
        }
    }
}
</script>
