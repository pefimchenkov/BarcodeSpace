import { Order } from "~/server/models/Order";


export default defineEventHandler(async (event) => {
  
  const body = await readBody(event);

  const orders = await Order.find({ userid: body.userid }).sort({ 'date': -1 });

  return orders;

})
