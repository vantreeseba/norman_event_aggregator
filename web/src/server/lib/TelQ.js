'use strict';
var request = require('request');
var RSVP = require('rsvp');
var _ = require('lodash');
var qs = require('querystring');
var tedious = require('tedious');

function TelQ() {

    function get(url, options) {
        function qGetHttp(resolve, reject) {
            function requestCallback(error, response, body) {
                if (!error && response.statusCode === 200) {
                    resolve(body, response);
                }
                else {
                    reject(error);
                }
            }
            url = (options.params) ? url + '?' + qs.stringify(options.params) : url;

            request(url, requestCallback);
        }
        return new RSVP.Promise(qGetHttp);
    }

    function dbMongoose(options) {
        var operation = options.operation || 'find';
        var query = options.query || {};
        var model = options.database;

        function qGetDB(resolve, reject) {
            if (!model) {
                reject('no model');
            }

            function dbCallback(err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            }
            model[operation](query, dbCallback);
        }
        return new RSVP.Promise(qGetDB);
    }

    function dbMSSql(options) {

        function qExecuteStatement(resolve, reject) {
            var data;

            var connection = new tedious.Connection(options.config);

            connection.on('connect', function (err) {
                if (err) {
                    console.log('Error on connection', err);
                    reject(new Error('Error connecting' + err));
                }

                var request = new tedious.Request(options.query, function (err) {
                    if (err) {
                        connection.close();
                        console.log('Error on request', err);
                        reject(new Error('Error with sql execution'));
                    }

                    connection.close();
                    resolve(data);
                });

                request.on('row', function (columns) {
                    data = {};
                    _.each(columns, function (column) {
                        data[column.metadata.colName] = column.value;
                    });
                });
                connection.execSql(request);
            });
        }

        return new RSVP.Promise(qExecuteStatement);
    }

    var q = _.extend(this, RSVP);

    q.get = get;
    q.mongo = dbMongoose;
    q.mssql = dbMSSql;
    return q;
}

module.exports = new TelQ();
