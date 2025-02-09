import { Order } from "~/server/models/Order";


export default defineEventHandler(async (event) => {
  
  const body = await readBody(event);
  console.log(body)

  const orders = await Order.find({ userid: body.userid });
  console.log(orders)

  return orders;

})
