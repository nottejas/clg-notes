// File: src/components/ShipmentDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShipmentDetails.css';

function ShipmentDetails() {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShipmentDetails = async () => {
      try {
        const response = await fetch('/shipments.xml');
        const data = await response.text();
        
        // Parse XML data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const shipmentNodes = xmlDoc.getElementsByTagName('shipment');
        
        let foundShipment = null;
        
        Array.from(shipmentNodes).forEach(shipment => {
          const trackingId = shipment.getElementsByTagName('trackingId')[0].textContent;
          if (trackingId === id) {
            foundShipment = {
              trackingId,
              senderName: shipment.getElementsByTagName('senderName')[0].textContent,
              receiverName: shipment.getElementsByTagName('receiverName')[0].textContent,
              status: shipment.getElementsByTagName('status')[0].textContent,
              estimatedDeliveryDate: shipment.getElementsByTagName('estimatedDeliveryDate')[0].textContent,
              origin: shipment.getElementsByTagName('origin')[0].textContent,
              destination: shipment.getElementsByTagName('destination')[0].textContent,
              weight: shipment.getElementsByTagName('weight')[0].textContent,
              deliveryType: shipment.getElementsByTagName('deliveryType')[0].textContent
            };
          }
        });
        
        if (foundShipment) {
          setShipment(foundShipment);
        } else {
          setError(`Shipment with tracking ID ${id} not found`);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Error fetching shipment details');
        setLoading(false);
        console.error(err);
      }
    };

    fetchShipmentDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading shipment details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!shipment) return <div className="error">Shipment not found</div>;

  return (
    <div className="shipment-details">
      <h2>Shipment Details</h2>
      <div className="details-card">
        <div className="details-header">
          <div>
            <h3>{shipment.trackingId}</h3>
            <span className={`status-badge ${shipment.status.toLowerCase().replace(/\s+/g, '-')}`}>
              {shipment.status}
            </span>
          </div>
          <div className="estimated-delivery">
            <p>Estimated Delivery</p>
            <p className="delivery-date">{new Date(shipment.estimatedDeliveryDate).toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="details-content">
          <div className="details-row">
            <div className="details-column">
              <h4>Sender</h4>
              <p>{shipment.senderName}</p>
              <h4>Origin</h4>
              <p>{shipment.origin}</p>
            </div>
            <div className="details-column">
              <h4>Receiver</h4>
              <p>{shipment.receiverName}</p>
              <h4>Destination</h4>
              <p>{shipment.destination}</p>
            </div>
          </div>
          
          <div className="details-row shipment-info">
            <div className="info-item">
              <span className="info-label">Weight</span>
              <span className="info-value">{shipment.weight} kg</span>
            </div>
            <div className="info-item">
              <span className="info-label">Delivery Type</span>
              <span className="info-value">{shipment.deliveryType}</span>
            </div>
          </div>
          
          <div className="tracking-timeline">
            <h4>Shipment Timeline</h4>
            <div className="timeline">
              <div className={`timeline-item ${shipment.status === 'Processing' || shipment.status === 'In Transit' || shipment.status === 'Out for Delivery' || shipment.status === 'Delivered' ? 'completed' : ''}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h5>Processing</h5>
                  <p>Shipment registered</p>
                </div>
              </div>
              <div className={`timeline-item ${shipment.status === 'In Transit' || shipment.status === 'Out for Delivery' || shipment.status === 'Delivered' ? 'completed' : ''}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h5>In Transit</h5>
                  <p>Shipment on the way</p>
                </div>
              </div>
              <div className={`timeline-item ${shipment.status === 'Out for Delivery' || shipment.status === 'Delivered' ? 'completed' : ''}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h5>Out for Delivery</h5>
                  <p>Shipment out for final delivery</p>
                </div>
              </div>
              <div className={`timeline-item ${shipment.status === 'Delivered' ? 'completed' : ''}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h5>Delivered</h5>
                  <p>Shipment delivered to recipient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="details-footer">
          <Link to="/" className="back-button">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default ShipmentDetails;