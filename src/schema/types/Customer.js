import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLList } from "graphql";
import { Order } from "./Order";
import { fakeDatabase } from "../../FakeDatabase";

export const Customer = new GraphQLObjectType({
    name: "Customer",
    description: "All details of an Customers on the website.",

    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString)},
        name: { type: GraphQLString},
        email: { type: GraphQLString},

        customerOrder: {
            type: new GraphQLList(Order),
            resolve: (source) => {
                return fakeDatabase.getOrdersOfCustomer(source.id);
            }
        }

    })
});