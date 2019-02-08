export const getInvoice = invoice => {
  if (invoice) {
    return invoice
  }
  return {
    id: Math.random().toString(36).substr(2, 9)
  }
};

export const getFormAction = pathname =>
  pathname === '/create' ? 'onCreate' : 'onUpdate';
 
export const getPageTitle = pathname =>
  pathname === '/create' ? 'Create Invoice' : 'Edit Invoice';