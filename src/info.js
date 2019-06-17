const Iota = require('@iota/core')

const iota = Iota.composeAPI({
   provider: 'https://nodes.devnet.iota.org:443'
})

iota.getNodeInfo()
   .then(info => console.log(info))
   .catch(err => console.log(err))