import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ShipmentDetails() {
  const { trackingId } = useParams();
  const [shipment, setShipment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch shipment data when component mounts
    fetchShipmentData();
  }, [trackingId]);
  
  const fetchShipmentData = () => {
    setIsLoading(true);
    
    // Using XMLHttpRequest (AJAX) instead of fetch
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/shipments.xml', true);
    
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          // Parse XML
          const xmlDoc = xhr.responseXML;
          const shipmentNodes = xmlDoc.getElementsByTagName('shipment');
          
          // Find the shipment with matching tracking ID
          let foundShipment = null;
          
          Array.from(shipmentNodes).forEach(shipment => {
            const currentTrackingId = shipment.getElementsByTagName('trackingId')[0].textContent;
            
            if (currentTrackingId === trackingId) {
              foundShipment = {
                trackingId: currentTrackingId,
                senderName: shipment.getElementsByTagName('senderName')[0].textContent,
                receiverName: shipment.getElementsByTagName('receiverName')[0].textContent,
                status: shipment.getElementsByTagName('status')[0].textContent,
                estimatedDeliveryDate: shipment.getElementsByTagName('estimatedDeliveryDate')[0].textContent,
                origin: shipment.getElementsByTagName('origin')[0].textContent,
                destination: shipment.getElementsByTagName('destination')[0].textContent,
                weight: shipment.getElementsByTagName('weight')[0].textContent,
                description: shipment.getElementsByTagName('description')[0].textContent
              };
            }
          });
          
          if (foundShipment) {
            setShipment(foundShipment);
          } else {
            setError(`Shipment with tracking ID ${trackingId} not found`);
          }
          
          setIsLoading(false);
        } catch (err) {
          setError('Failed to parse shipment data');
          setIsLoading(false);
          console.error('Error parsing shipment data:', err);
        }
      } else {
        setError(`Failed to fetch shipment data: ${xhr.status}`);
        setIsLoading(false);
      }
    };
    
    xhr.onerror = function() {
      setError('Network error occurred while fetching shipment data');
      setIsLoading(false);
    };
    
    xhr.send();
  };
  
  if (isLoading) return <div>Loading shipment details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!shipment) return <div>Shipment not found</div>;
  
  return (
    <div>
      <h2>Shipment Details</h2>
      <div>
        <h3>Tracking ID: {shipment.trackingId}</h3>
        <table>
          <tbody>
            <tr>
              <td>Sender:</td>
              <td>{shipment.senderName}</td>
            </tr>
            <tr>
              <td>Receiver:</td>
              <td>{shipment.receiverName}</td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>{shipment.status}</td>
            </tr>
            <tr>
              <td>Estimated Delivery:</td>
              <td>{new Date(shipment.estimatedDeliveryDate).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td>Origin:</td>
              <td>{shipment.origin}</td>
            </tr>
            <tr>
              <td>Destination:</td>
              <td>{shipment.destination}</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td>{shipment.weight} kg</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{shipment.description}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/">Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default ShipmentDetails;