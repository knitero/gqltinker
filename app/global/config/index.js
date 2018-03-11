'use strict';

module.exports = {
    server: {
        PORT: process.env.PORT || 1221,

    },
    database: {
        HOST: process.env.MONGODB || 'mongodb://admin:admin@ds261088.mlab.com:61088/graphql'
    }
}

