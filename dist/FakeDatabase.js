'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeDatabase = function () {
    function FakeDatabase() {
        _classCallCheck(this, FakeDatabase);

        this.customers = [{ id: '88d6bec2', name: 'Parky Chow', email: 'parky0919@gmail.com' }, { id: '77e2448a', name: 'Vincent Chan', email: 'vincent@gmail.com' }, { id: '0beb564c', name: 'Andy Law', email: 'andy@gmail.com' }];

        this.customerOrders = [{
            id: '0939',
            stock_name: 'China Construction Bank',
            stock_share: 1000,
            customer: '88d6bec2'
        }, {
            id: '0005',
            stock_name: 'HSBC Holdings plc',
            stock_share: 400,
            customer: '0beb564c'
        }, {
            id: '1398',
            stock_name: 'Industrial and Commercial Bank of China',
            stock_share: 100,
            customer: '77e2448a'
        }];
    }

    // ------------------------------------------------------------
    //                      READ METHODS
    // ------------------------------------------------------------


    _createClass(FakeDatabase, [{
        key: 'getCustomerOrders',
        value: function getCustomerOrders() {
            // Here you would make a db connection + query + return data
            return this.customerOrders;
        }
    }, {
        key: 'getCustomerOrder',
        value: function getCustomerOrder(id) {
            return this.customerOrders.filter(function (order) {
                return order.id === id;
            })[0];
        }
    }, {
        key: 'getCustomer',
        value: function getCustomer(customerId) {
            return this.customers.filter(function (customer) {
                return customer.id === customerId;
            })[0];
        }
    }, {
        key: 'getOrdersOfCustomer',
        value: function getOrdersOfCustomer(customerId) {
            return this.getCustomerOrder().filter(function (item) {
                return item.customers === customerId;
            });
        }

        // ------------------------------------------------------------
        //                      WRITE METHODS
        // ------------------------------------------------------------

    }, {
        key: 'addCustomerOrder',
        value: function addCustomerOrder(post) {
            post.id = this.customerOrders.length + 1;
            this.customerOrders.push(post);
            return post;
        }
    }]);

    return FakeDatabase;
}();

var fakeDatabase = exports.fakeDatabase = new FakeDatabase();