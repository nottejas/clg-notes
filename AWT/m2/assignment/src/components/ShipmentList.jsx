import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import SortControl from './SortControl';
import './ShipmentList.css';

function ShipmentList() {
  const [shipments, setShipments] = useState([]);
  const [filteredShipments, setFilteredShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortField, setSortField] = useState('trackingId');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    fetchShipments();
  }, []);

  const fetchShipments = async () => {
    try {
      const response = await fetch('/shipments.xml');
      const data = await response.text();
      
      // Parse XML data
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'application/xml');
      const shipmentNodes = xmlDoc.getElementsByTagName('shipment');
      
      const parsedShipments = Array.from(shipmentNodes).map(shipment => {
        return {
          trackingId: shipment.getElementsByTagName('trackingId')[0].textContent,
          senderName: shipment.getElementsByTagName('senderName')[0].textContent,
          receiverName: shipment.getElementsByTagName('receiverName')[0].textContent,
          status: shipment.getElementsByTagName('status')[0].textContent,
          estimatedDeliveryDate: shipment.getElementsByTagName('estimatedDeliveryDate')[0].textContent,
          origin: shipment.getElementsByTagName('origin')[0].textContent,
          destination: shipment.getElementsByTagName('destination')[0].textContent,
          weight: shipment.getElementsByTagName('weight')[0].textContent,
          deliveryType: shipment.getElementsByTagName('deliveryType')[0].textContent
        };
      });
      
      setShipments(parsedShipments);
      setFilteredShipments(parsedShipments);
      setLoading(false);
    } catch (err) {
      setError('Error fetching shipment data');
      setLoading(false);
      console.error(err);
    }
  };

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

  const handleSort = (field) => {
    const newDirection = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    
    const sorted = [...filteredShipments].sort((a, b) => {
      if (field === 'estimatedDeliveryDate') {
        const dateA = new Date(a[field]);
        const dateB = new Date(b[field]);
        return newDirection === 'asc' ? dateA - dateB : dateB - dateA;
      } else {
        return newDirection === 'asc' 
          ? a[field].localeCompare(b[field]) 
          : b[field].localeCompare(a[field]);
      }
    });
    
    setFilteredShipments(sorted);
    setSortField(field);
    setSortDirection(newDirection);
  };

  if (loading) return <div className="loading">Loading shipments...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="shipment-dashboard">
      <h2>Shipment Tracking Dashboard</h2>
      
      <div className="controls">
        <Search onSearch={handleSearch} />
        <SortControl onSort={handleSort} currentSort={sortField} direction={sortDirection} />
      </div>
      
      <div className="shipment-table-container">
        <table className="shipment-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('trackingId')}>
                Tracking ID {sortField === 'trackingId' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th>Sender</th>
              <th onClick={() => handleSort('receiverName')}>
                Receiver {sortField === 'receiverName' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('status')}>
                Status {sortField === 'status' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('estimatedDeliveryDate')}>
                Est. Delivery {sortField === 'estimatedDeliveryDate' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredShipments.length > 0 ? (
              filteredShipments.map(shipment => (
                <tr key={shipment.trackingId} className={`status-${shipment.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  <td>
                    <Link to={`/shipment/${shipment.trackingId}`}>{shipment.trackingId}</Link>
                  </td>
                  <td>{shipment.senderName}</td>
                  <td>{shipment.receiverName}</td>
                  <td>
                    <span className={`status-badge ${shipment.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td>{new Date(shipment.estimatedDeliveryDate).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-results">No shipments found matching your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShipmentList;