import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import customer from './queries/customer';
import customerOrder from './queries/customerOrder';
import customerOrders from './queries/customerOrders';
import addCustomerOrder  from './mutations/addCustomerOrder';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Rootquery',
        fields: () => ({
            ...customer,
            ...customerOrder,
            ...customerOrders,
        })
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutation',
        fields: () => ({
            ...addCustomerOrder
        })
    })
});

export default schema;