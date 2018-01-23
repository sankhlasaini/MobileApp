module.exports = {
    appenders: {
        access: { type: 'dateFile', filename: 'log/access.log', pattern: '-yyyy-MM-dd' },
        app: { type: 'file', filename: 'log/app.log', maxLogSize: 10485760, numBackups: 3 },
        console: { type: 'console' },
        errorFile: { type: 'file', filename: 'log/errors.log' },
        errors: { type: 'logLevelFilter', level: 'error', appender: 'errorFile' }
    },
    categories: {
        default: { appenders: ['app', 'errors', 'console'], level: 'info' },
        http: { appenders: ['access', 'console'], level: 'info' }
    }
};