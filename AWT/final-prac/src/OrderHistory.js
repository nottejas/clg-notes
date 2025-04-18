import React from 'react'

function OrderHistory(props) {

    const { orders } = props

  return (
    <div>
        <h2>Order hist</h2> 
        <table border='1' cellPadding="8" >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>Irevenue</th>
                </tr>
            </thead>
            <tbody>
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No orders found</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>

  )
}

export default OrderHistory