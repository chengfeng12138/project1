/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {
        cluster: {listen: {port: 3000, hostname: '127.0.0.1'}},
        security: {csrf: false},
        bodyParser: {
            jsonLimit: '100mb',
            formLimit: '100mb',
        },
        multipart: {
            mode: 'file',
            fieldNameSize: 1000,
            fieldSize: 1024000000000000000,
            fields: 100000,
            fileSize: 104857600000000000,
            files: 1000000,
        },
        multipartParseOptions: {
            limits: {
                fieldNameSize: 10000000,
                fieldSize: 1024000000000000,
                fields: 1000000,
                fileSize: 104857600000000000,
                files: 10000
            }
        }
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1637588440060_8985';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
