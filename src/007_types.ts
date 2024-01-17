// Boolean
let paidAccount: boolean = true;

// Number
let age : number = 33;
var taxRate: number = 7.5;

// String
var fullName: string = "Jordan Hodgens";

// Array
var ages : number[] = [33, 28, 11];

// Tuple
let player : [number, string, number, number];
player = [3, 'Corerra', 0.333, 33];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData : any[] = [123, 'Jordan', false];

// Void
function printOut(msg: string) : void {
    console.log(msg);
}
printOut('Test');
