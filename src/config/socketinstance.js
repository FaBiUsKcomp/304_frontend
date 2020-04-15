import io from 'socket.io-client'

const defineSocket = url => io(url)

module.exports = defineSocket