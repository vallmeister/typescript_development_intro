// Boolean
var paidAccount = true;
// Number
var age = 33;
var taxRate = 7.5;
// String
var fullName = "Jordan Hodgens";
// Array
var ages = [33, 28, 11];
// Tuple
var player;
player = [3, 'Corerra', 0.333, 33];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any
var apiData = [123, 'Jordan', false];
// Void
function printOut(msg) {
    console.log(msg);
}
printOut('Test');
//# sourceMappingURL=007_types.js.map