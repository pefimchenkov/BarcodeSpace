import { Order } from "~/server/models/Order";


export default defineEventHandler(async (event) => {
  
  const body = await readBody(event);

  if (body.action === "get_all") {
    const orders = await Order.find({ userid: body.userid }).sort({ 'date': -1 });
    return orders;
  }

  if (body.action === "get_last") {
    const order = await Order.find({ userid: body.userid  }).sort({$natural:-1}).limit(1);
    return order[0];
  }

})
