'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Order = require('../types/Order');

var _FakeDatabase = require('../../FakeDatabase');

exports.default = {
  addCustomerOrder: {
    type: _Order.Order,
    description: "Create a new customer order",
    args: {
      post: { type: _Order.PostInputType }
    },
    resolve: function resolve(root, _ref) {
      var post = _ref.post;

      return _FakeDatabase.fakeDatabase.addCustomerOrder(post);
    }
  }
};