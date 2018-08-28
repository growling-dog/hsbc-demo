'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Order = require('../types/Order');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
    customerOrders: {
        type: new _graphql.GraphQLList(_Order.Order),
        description: "Get a list of recent orders",
        args: {},
        resolve: function resolve() {
            return _FakeDatabase.fakeDatabase.getCustomerOrders();
        }
    }
};