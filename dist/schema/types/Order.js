"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostInputType = exports.Order = undefined;

var _graphql = require("graphql");

var _Customer = require("./Customer");

var _FakeDatabase = require("../../FakeDatabase");

var Order = exports.Order = new _graphql.GraphQLObjectType({
    name: "Order",
    description: "All details of an Customer Order on the website.",

    fields: function fields() {
        return {
            id: { type: _graphql.GraphQLInt },
            stock_name: { type: _graphql.GraphQLString },
            stock_share: { type: _graphql.GraphQLInt },
            customer: {
                type: _Customer.Customer,
                resolve: function resolve(post) {
                    return _FakeDatabase.fakeDatabase.getCustomer(post.customer);
                }
            }
        };
    }
});

var PostInputType = exports.PostInputType = new _graphql.GraphQLInputObjectType({
    name: 'PostInput',
    fields: {
        stock_name: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        stock_share: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
        customer: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
    }
});