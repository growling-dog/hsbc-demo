'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Order = require('../types/Order');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
    customerOrder: {
        type: _Order.Order,
        description: "Get a recent orders list",
        args: {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
        },
        resolve: function resolve(parent, _ref) {
            var id = _ref.id;

            return _FakeDatabase.fakeDatabase.getCustomerOrder(id);
        }
    }
};