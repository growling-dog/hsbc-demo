class FakeDatabase{

    constructor() {
        this.customers = [
            { id: '88d6bec2', name: 'Parky Chow', email: 'parky0919@gmail.com' },
            { id: '77e2448a', name: 'Vincent Chan', email: 'vincent@gmail.com' },
            { id: '0beb564c', name: 'Andy Law', email: 'andy@gmail.com' }
        ];

        this.customerOrders = [
            {
                id: '0939',
                stock_name: 'China Construction Bank',
                stock_share: 1000,
                customer: '88d6bec2',
            },
            {
                id: '0005',
                stock_name: 'HSBC Holdings plc',
                stock_share: 400,
                customer: '0beb564c',
            },
            {
                id: '1398',
                stock_name: 'Industrial and Commercial Bank of China',
                stock_share: 100,
                customer: '77e2448a',
            }
        ];
    }

    // ------------------------------------------------------------
    //                      READ METHODS
    // ------------------------------------------------------------
    getCustomerOrders() {
        // Here you would make a db connection + query + return data
        return this.customerOrders;
    }

    getCustomerOrder(id) {
        return this.customerOrders.filter((order) => {
            return order.id === id;
        })[0];
    }

    getCustomer(customerId) {
        return this.customers.filter((customer) => {
            return customer.id === customerId;
        })[0];
    }

    getOrdersOfCustomer(customerId) {
        return this.getCustomerOrder().filter((item) => {
            return item.customers === customerId;
        });
    }



    // ------------------------------------------------------------
    //                      WRITE METHODS
    // ------------------------------------------------------------
    addCustomerOrder(post) {
        post.id = this.customerOrders.length + 1;
        this.customerOrders.push(post);
        return post;
    }

}

export const fakeDatabase = new FakeDatabase();