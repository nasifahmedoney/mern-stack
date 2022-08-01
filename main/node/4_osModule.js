const os = require('os');

let os_info={
    userInfo: os.userInfo(),
    name: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem(),
    upTime: os.uptime()
};
console.log(os_info)