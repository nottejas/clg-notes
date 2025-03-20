import React from 'react';
import { Link } from 'react-router-dom';

function ShipmentList({ shipments }) {
  if (shipments.length === 0) {
    return <div>No shipments found matching your criteria.</div>;
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Status</th>
            <th>Est. Delivery Date</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map(shipment => (
            <tr key={shipment.trackingId}>
              <td>
                <Link to={`/shipment/${shipment.trackingId}`}>
                  {shipment.trackingId}
                </Link>
              </td>
              <td>{shipment.senderName}</td>
              <td>{shipment.receiverName}</td>
              <td>{shipment.status}</td>
              <td>{new Date(shipment.estimatedDeliveryDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShipmentList;