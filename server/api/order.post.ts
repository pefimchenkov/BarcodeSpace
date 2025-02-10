import { Order } from "~/server/models/Order";


export default defineEventHandler(async (event) => {
  
  const body = await readBody(event);

  if (!body.order.length) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Данные для заказа отсутствуют"
    });
  }

  const totalPrice = body.order.reduce((acc: number, item: { price: number, qty: number }) => {
    return (acc + (item.price * item.qty));
  }, 0)


  const data = {
    userid: body.userid,
    price: totalPrice,
    date: new Date(),
    status: 'Создан',
    goods: body.order
  }

  const order = await Order.create(data);

  return { ...order.toObject() }

})
