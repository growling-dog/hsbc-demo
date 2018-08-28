import { GraphQLList } from 'graphql';
import { Order } from '../types/Order';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    customerOrders: {
        type: new GraphQLList(Order),
        description: "Get a list of customer orders",
        args: {},
        resolve: function () {
            return fakeDatabase.getCustomerOrders();
        }    
    }
} 