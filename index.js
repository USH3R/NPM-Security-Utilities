const crypto = require("crypto");

function sha256Hash(data) {
    return crypto.createHash("sha256").update(data).digest("hex");
}

function isValidIPv4(ip) {
    const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return pattern.test(ip);
}

console.log("Hash test:", sha256Hash("security"));
console.log("IP check:", isValidIPv4("192.168.1.1"));

module.exports = { sha256Hash, isValidIPv4 };
