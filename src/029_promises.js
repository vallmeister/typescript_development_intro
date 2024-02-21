"use strict";
/**
 * An object that represents an operation that hasn't completed yet but is expected in the future.
 * It can be in three states: Pending, Resolve, Reject
 */
let performUpload = function (imgStatus) {
    return new Promise((resolve) => {
        console.log(`Status: ${imgStatus}`);
        setTimeout(() => {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('uploading...')
    .then((res) => {
    upload = res;
    return performUpload('compressing...');
})
    .then((res) => {
    compress = res;
    return performUpload('transferring...');
})
    .then((res) => {
    transfer = res;
    return performUpload('Image upload completed.');
});
console.log(upload);
console.log(compress);
console.log(transfer);
//# sourceMappingURL=029_promises.js.map