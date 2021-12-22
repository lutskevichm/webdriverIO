const winston = require('winston');
const moment = require('moment');
let currentDate = moment().format("YYYY-MM-DD");

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({
            level: 'info'
        }),
        new winston.transports.File({
            filename: currentDate+'.log',
            level: 'debug'
        })
    ],
    format: winston.format.simple()
});

module.exports = logger;