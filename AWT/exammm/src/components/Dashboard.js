import React, { useState, useEffect } from 'react';
import ShipmentList from './ShipmentList';
import Search from './Search';
import SortOptions from './SortOptions';

function Dashboard() {
  const [shipments, setShipments] = useState([]);
  const [filteredShipments, setFilteredShipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch shipment data when component mounts
    fetchShipmentData();
  }, []);
  
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
          
          // Convert XML nodes to JavaScript objects
          const shipmentData = Array.from(shipmentNodes).map(shipment => {
            return {
              trackingId: shipment.getElementsByTagName('trackingId')[0].textContent,
              senderName: shipment.getElementsByTagName('senderName')[0].textContent,
              receiverName: shipment.getElementsByTagName('receiverName')[0].textContent,
              status: shipment.getElementsByTagName('status')[0].textContent,
              estimatedDeliveryDate: shipment.getElementsByTagName('estimatedDeliveryDate')[0].textContent,
              origin: shipment.getElementsByTagName('origin')[0].textContent,
              destination: shipment.getElementsByTagName('destination')[0].textContent,
              weight: shipment.getElementsByTagName('weight')[0].textContent,
              description: shipment.getElementsByTagName('description')[0].textContent
            };
          });
          
          setShipments(shipmentData);
          setFilteredShipments(shipmentData);
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
  
  // Search functionality
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredShipments(shipments);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = shipments.filter(shipment => 
      shipment.trackingId.toLowerCase().includes(term) || 
      shipment.receiverName.toLowerCase().includes(term)
    );
    
    setFilteredShipments(filtered);
  };
  
  // Sort functionality
  const handleSort = (sortBy) => {
    let sortedShipments = [...filteredShipments];
    
    if (sortBy === 'status') {
      sortedShipments.sort((a, b) => a.status.localeCompare(b.status));
    } else if (sortBy === 'date') {
      sortedShipments.sort((a, b) => 
        new Date(a.estimatedDeliveryDate) - new Date(b.estimatedDeliveryDate)
      );
    }
    
    setFilteredShipments(sortedShipments);
  };
  
  if (isLoading) return <div>Loading shipment data...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>Shipment Dashboard</h2>
      <Search onSearch={handleSearch} />
      <SortOptions onSort={handleSort} />
      <ShipmentList shipments={filteredShipments} />
    </div>
  );
}

export default Dashboard;