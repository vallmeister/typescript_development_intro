// var x : number = 0;

// while (x < 10) {
//     console.log(x);
//     x++;
// }

let players : number[] = [3, 10, 4, 5, 1];

console.log("For / In : Index");
for (let player in players) {
    console.log(player);
} 

console.log("For / Of : Elements");
for (let player of players) {
    console.log(player);
}
