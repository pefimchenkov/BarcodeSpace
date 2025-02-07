import { Order } from "~/server/models/Order";


export default defineEventHandler(async (event) => {
  
  const body = await readBody(event);


  if (!body.length) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Данные для заказа отсутствуют"
    });
  }

  const price = body.reduce((acc: number, item: { price: number }) => {
    return (acc + item.price);
  }, 0)

  const data = {
    price,
    date: new Date(),
    status: 'Создан',
    goods: body
  }

  const order = await Order.create(data);

  return { ...order.toObject() }

})
