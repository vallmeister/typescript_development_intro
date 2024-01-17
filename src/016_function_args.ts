// optional and default
function printAddress(street : string, streetTwo? : string, state = 'AZ') {
    console.log(street);

    if (streetTwo) {
        console.log(streetTwo);   
    }
    console.log(state);
}

// required arguments can't be placed after optional ones
printAddress('123 Any St');
printAddress('123 Any St', 'Suite 540');
printAddress('123 Any St', 'Suite 540', 'UT');

// rest argument
function lineupCard (team : string, ...players : string[]) {
    console.log('Team ${team}');
    for (let player of players) {
        console.log(player);
    }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');