const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);

const encrypt = (pass) => {
    return cryptr.encrypt(pass);
}
const descrypt = (pass) => {
    return cryptr.decrypt(pass);
}

module.exports = { encrypt, descrypt }