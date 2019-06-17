const Iota = require('@iota/core')

const seed =
'JID9EEOYXEQFYSPXWUPNCDOYHPYRGHXIJBOJOVIMSNAQKRUUQTBFSZXEJOTUE9UTTITI9FHRFOEWSAKPN'
const security = 2
const checksum = true

for (let i=0; i<=10; i++) {
    console.log(Iota.generateAddress(seed, i, security, checksum))
}