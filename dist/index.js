'use strict';

var _graphql = require('graphql');

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _customer = require('./schema/queries/customer');

var _customer2 = _interopRequireDefault(_customer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const query = `
//     {
//         customer(id: "88d6bec2"){
//             name,
//             email
//         }
//     }
// `;

// const query = `
//     {
//         customerOrder(id: "0939"){
//             id,
//             stock_name,
//             stock_share
//         }
//     }
// `;

var query = '\n    {\n        customerOrders{\n            id,\n            stock_name,\n            stock_share,\n            customer {\n                  name,\n                   email\n            }\n        }\n    }\n';

(0, _graphql.graphql)(_schema2.default, query).then(function (result) {

    console.log(JSON.stringify(result, null, 2));
});