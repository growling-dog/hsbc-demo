'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _Customer = require('../types/Customer');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
    customer: {
        type: _Customer.Customer,
        description: "Get a specific Customer",
        args: {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
        },
        resolve: function resolve(parent, _ref) {
            var id = _ref.id;

            return _FakeDatabase.fakeDatabase.getCustomer(id);
        }
    }
};