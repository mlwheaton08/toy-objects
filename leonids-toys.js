const toys = [
    {
        id: 1,
        name: "Teddy Bear",
        price: 15,
        weight: 0.3,
        size: "medium",
        electronic: false
    },
    {
        id: 2,
        name: "HotWheels Car",
        price: 5,
        weight: 0.3,
        size: "small",
        electronic: false
    },
    {
        id: 3,
        name: "Remote Control Car",
        price: 50,
        weight: 5.5,
        size: "large",
        electronic: true
    }
];

const bubbleMaker = {
    id: 4,
    name: "Bubble Maker",
    price: 8,
    weight: 0.3,
    size: "small",
    electronic: false
}

const gameboy = {
    id: 5,
    name: "Gameboy",
    price: 40,
    weight: 0.8,
    size: "medium",
    electronic: true
}

toys.push(bubbleMaker);
toys.push(gameboy);

for (const toy of toys) {
    toy.price += (toy.price * 0.05);
    console.log(`${toy.name} is a ${toy.size} sized toy and costs $${toy.price}.`)
}