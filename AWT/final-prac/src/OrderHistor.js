import React from 'react'

function OrderHistor() {

    const orders = [
        { order_id: 1, amount: 2323, status: 'pending' },
        { order_id: 2, amount: 22, status: 'completed' },
        { order_id: 3, amount: 23232, status: 'pending' },
    ]

    // pending and amt > 2000

    const getPending = () => {
        return orders.filter(order => order.status === 'pending' && order.amount >= 100)
    } 
    const filterOrders = getPending()

  return (
    <div>
        <h2>Order history</h2>
        <ul>
            {filterOrders.length > 0 ? (
                filterOrders.map(order => (
                    <li key={order.order_id}>
                        Order id: {order.order_id} Amount : {order.amount} Status : {order.status}
                    </li>
                ))
            ) : (
                <li>No orders</li>
            )}
        </ul>
    </div>
  )
}

export default OrderHistor