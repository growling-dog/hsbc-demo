"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Customer = undefined;

var _graphql = require("graphql");

var _Order = require("./Order");

var _FakeDatabase = require("../../FakeDatabase");

var Customer = exports.Customer = new _graphql.GraphQLObjectType({
    name: "Customer",
    description: "All details of an Customers on the website.",

    fields: function fields() {
        return {
            id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
            name: { type: _graphql.GraphQLString },
            email: { type: _graphql.GraphQLString },

            customerOrder: {
                type: new _graphql.GraphQLList(_Order.Order),
                resolve: function resolve(source) {
                    return _FakeDatabase.fakeDatabase.getOrdersOfCustomer(source.id);
                }
            }

        };
    }
});