'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1489816290616_7711';

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

    config.redis = {
        client: {
            host: '127.0.0.1',
            port: '6379',
            password: '',
            db: '0',
        },
    };

    config.sessionRedis = {
        name: '', // single redis does not need to config name
    };

    config.weappSDK = {
        appId: '', // your weapp appId
        appSecret: '', // weapp appSecret
    };

    config.security = {
        csrf: {
            ignoreJSON: false, // Ĭ��Ϊ false��������Ϊ true ʱ������Ź����� content-type Ϊ `application/json` ������
        },
    };

    // Qcloud Cloud Object Storage
    config.cos = {
        secretId: '',
        secretKey: '',
        appId: '',
        bucket: '',
        folder: '',
    };

    return config;
};
