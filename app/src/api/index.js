import axios from "axios";

const API_URL = 'http://localhost:3004/';

export async function loadInvoices() {
  try {
    const { data : invoices } = await axios.get(`${API_URL}invoices`);
    return await { invoices }
    
    
  } catch (e) {
    throw e;
  }
}
export async function createInvoice(data) {
  try {
    await axios.post(`${API_URL}invoices`, data);
    const { data : invoices } = await axios.get(`${API_URL}invoices`);
    return await { invoices }
    
  } catch (e) {
    throw e;
  }
}

export async function updateInvoice(data) {
  try {
    await axios.patch(`${API_URL}invoices/${data.id}`, data);
    const { data : invoices } = await axios.get(`${API_URL}invoices`);
    return await { invoices }
    
  } catch (e) {
    throw e;
  }
}

export async function deleteInvoice(id) {
  try {
    await axios.delete(`${API_URL}invoices/${id}`);
    const { data : invoices } = await axios.get(`${API_URL}invoices`);
    return await { invoices }
    
  } catch (e) {
    throw e;
  }
}




