const winston = require('winston');
const WinstonLogStash = require('winston3-logstash-transport');
const moment = require('moment');
let currentDate = moment().format("YYYY-MM-DD");

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({
            level: 'info'
        }),
        new winston.transports.File({
            filename: currentDate + '.log',
            level: 'debug'
        })
    ],
    format: winston.format.simple()
});

logger.add(new WinstonLogStash({
    mode: 'udp',
    host: '127.0.0.1',
    port: 28777
}));

module.exports = logger;