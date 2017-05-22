var bakje

bakje = 6

console.log('Wat zit er in je bakje?', bakje)

function geefIets (iets) {
    return iets
}

console.log('Geef iets, namelijk: 3', geefIets(3))
console.log('Geef iets, namelijk: bakje', geefIets(bakje))
console.log('Geef iets, namelijk: bakje', geefIets(geefIets(bakje)))

function som (a, b) {
    return a + b
}

function geefAlleenJa (a) {
    if (a == "Ja") {
        return true;
    }
}