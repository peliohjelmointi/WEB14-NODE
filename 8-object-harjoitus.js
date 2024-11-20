const os = require('os')

const obj = {
    'user' : os.userInfo().username,
    'os_type': os.type()
}

console.log(obj)