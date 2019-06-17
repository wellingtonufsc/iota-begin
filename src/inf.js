const Iota = require('@iota/core')

const iota = Iota.composeAPI({
   provider: 'https://nodes.devnet.iota.org:443'
})

iota.getNodeInfo()
   .then(info => console.log(info))
   .catch(err => console.log(err))



// import { composeAPI } from '@iota/core'

// const iota = composeAPI({
//     // replace with your IRI node address 
//     // or connect to a Devnet node for testing: 'https://nodes.devnet.iota.org:443'
//     provider: 'https://nodes.devnet.iota.org:443'
// })

// iota.getNodeInfo()
//     .then(info => console.log(info))
//     .catch(error => {
//         console.log(`Request error: ${error.message}`)
//     })