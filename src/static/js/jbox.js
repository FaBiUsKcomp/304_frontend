const jbox = require('jbox')

const notice = (color, message) => {
    new jbox('Notice', {
        animation: 'flip',
        color: color,
        content: message,
        delayOnHover: true,
        showCountdown: true
    })
}

module.exports = { notice }

