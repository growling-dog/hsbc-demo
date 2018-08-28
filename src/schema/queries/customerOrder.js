import { GraphQLNonNull, GraphQLString} from 'graphql';
import { Order } from '../types/Order';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    customerOrder: {
        type: Order,
        description: "Get exact a customer order",
        args: {
            id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: function (parent, {id}) {
            return fakeDatabase.getCustomerOrder(id);
        }
    }
} 