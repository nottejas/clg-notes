import React from "react";

function OrderHistory(){
    const orders = [
        { order_id: 101, amt: 3000, status: "pending"},
        { order_id: 102, amt: 1500, status: "completed" },
        { order_id: 103, amt: 2500, status: "pending" },
    ]

    const filteredOrders = orders.filter(order => order.status === "pending" && order.amt > 2000)

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {filteredOrders.length > 0 ? (
                    filteredOrders.map(order => (
                        <li key={order.order_id}>
                            Order id: {order.order_id}, amount: {order.amt}
                        </li>
                    ))
                ):(
                    <li>No matching</li>
                )}
            </ul>
        </div>
    )

}

export default OrderHistory;










