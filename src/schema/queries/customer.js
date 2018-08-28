import { GraphQLString, GraphQLNonNull,} from 'graphql';
import { Customer } from '../types/Customer';
import { fakeDatabase } from '../../FakeDatabase';

export default {
    customer: {
        type: Customer,
        description: "Get a specific Customer",
        args: {
            id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: function (parent, {id}) {
            return fakeDatabase.getCustomer(id);
        }
    }
}