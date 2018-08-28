import {graphql} from 'graphql';
import schema from './schema';
import customer from './schema/queries/customer';

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

const query = `
    {
        customerOrders{
            id,
            stock_name,
            stock_share,
            customer {
                  name,
                   email
            }
        }
    }
`;



graphql(schema, query).then(result => {

    console.log(JSON.stringify(result, null, 2));

});