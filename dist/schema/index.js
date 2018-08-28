'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _customer = require('./queries/customer');

var _customer2 = _interopRequireDefault(_customer);

var _customerOrder = require('./queries/customerOrder');

var _customerOrder2 = _interopRequireDefault(_customerOrder);

var _customerOrders = require('./queries/customerOrders');

var _customerOrders2 = _interopRequireDefault(_customerOrders);

var _addCustomerOrder = require('./mutations/addCustomerOrder');

var _addCustomerOrder2 = _interopRequireDefault(_addCustomerOrder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
        name: 'Rootquery',
        fields: function fields() {
            return _extends({}, _customer2.default, _customerOrder2.default, _customerOrders2.default);
        }
    }),
    mutation: new _graphql.GraphQLObjectType({
        name: 'RootMutation',
        fields: function fields() {
            return _extends({}, _addCustomerOrder2.default);
        }
    })
});

exports.default = schema;