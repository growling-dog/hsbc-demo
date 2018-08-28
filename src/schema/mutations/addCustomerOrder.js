import { Order, PostInputType } from '../types/Order';
import { fakeDatabase } from '../../FakeDatabase';

export default {
  addCustomerOrder: {
    type: Order,
    description: "Create a new customer order",
    args: {
        post: { type: PostInputType }
    },
    resolve: function(root, { post }) {
        return fakeDatabase.addCustomerOrder(post);
    }
  }
};
