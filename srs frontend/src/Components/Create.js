import React, { useState, useEffect } from 'react';
import { Service } from '../Service/Adminworker'

const Create = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');

  useEffect(() => {
    // Fetch customer data from API or database
    const fetchCustomers = async () => {
        try {
            const fetchdata = async () => {
                const resp = await Service.getships();
                
            
          setCustomers(resp.data);}
        } catch (error) {
          console.error('Error fetching customers:', error);
        }
      };
      fetchCustomers();
    }, []);
  

  const handleCustomerIdChange = (event) => {
    setSelectedCustomerId(event.target.value);
  };

  return (
    <div>
      <h2>Bank Table</h2>
      <select value={selectedCustomerId} onChange={handleCustomerIdChange}>
        <option value="">Select Customer ID</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>
      {selectedCustomerId && (
        <p>Selected Customer ID: {selectedCustomerId}</p>
      )}
    </div>
  );
};

export default Create;