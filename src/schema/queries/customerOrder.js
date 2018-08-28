import { GraphQLNonNull, GraphQLString} from 'graphql';
import { Order } from '../types/Order';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    customerOrder: {
        type: Order,
        description: "Get a recent orders list",
        args: {
            id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: function (parent, {id}) {
            return fakeDatabase.getCustomerOrder(id);
        }
    }
} 