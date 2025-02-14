const orderSchema = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
    },
    {
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productName", title: "Product Name", type: "string" },
            { name: "productId", title: "Product ID", type: "string" },
            { name: "imageUrl", title: "Image URL", type: "url" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
          ],
        },
      ],
    },
    {
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    },
    {
      name: "shippingAddress",
      title: "Shipping Address",
      type: "object",
      fields: [
        { name: "firstName", title: "First Name", type: "string" },
        { name: "lastName", title: "Last Name", type: "string" },
        { name: "email", title: "Email", type: "string" },
        { name: "phone", title: "Phone Number", type: "string" },
        { name: "company", title: "Company", type: "string" },
        { name: "country", title: "Country", type: "string" },
        { name: "city", title: "City", type: "string" },
        { name: "zipCode", title: "Zip Code", type: "string" },
        { name: "address1", title: "Address 1", type: "string" },
        { name: "address2", title: "Address 2", type: "string" },
      ],
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      },
      initialValue: "Pending",
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
    },
  ],
};

export default orderSchema;
