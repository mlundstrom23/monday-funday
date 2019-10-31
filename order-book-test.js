const existingBook = [{ type: 'buy', quantity: 10, price: 6150 }]
const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }

const allOrders = existingBook.concat([incomingOrder])

  // If all the orders are type === sell, return all orders
  if (allOrders.filter(o => o.type === 'sell').length === allOrders.length) {
    return allOrders
  }


console.log(allOrders)
