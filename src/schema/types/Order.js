import { GraphQLInputObjectType,GraphQLObjectType,GraphQLString,GraphQLInt,GraphQLNonNull } from "graphql";
import { Customer } from "./Customer";
import { fakeDatabase } from "../../FakeDatabase";


export const Order = new GraphQLObjectType({
    name: "Order",
    description: "All details of an Customer Order on the website.",

    fields: () => ({
        id: { type: GraphQLInt},
        stock_name: { type: GraphQLString},
        stock_share: { type: GraphQLInt},
        customer: {
            type: Customer,
            resolve: (post) => {
                return fakeDatabase.getCustomer(post.customer)
            }
        }        
    })
});

export const PostInputType = new GraphQLInputObjectType({
    name: 'PostInput',
    fields: {
        stock_name: { type: new GraphQLNonNull(GraphQLString) },
        stock_share: { type: new GraphQLNonNull(GraphQLString) },
        customer: { type: new GraphQLNonNull(GraphQLString) }
    }
});