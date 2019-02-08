import { createAction } from 'redux-actions';
import * as webAPI from '../api';

export const loadInvoices = createAction('GET_INVOICES', webAPI.loadInvoices);
export const createInvoice = createAction('CREATE_INVOICE', webAPI.createInvoice);
export const updateInvoice = createAction('EDIT_INVOICE', webAPI.updateInvoice);
export const deleteInvoice = createAction('DELETE_INVOICE', webAPI.deleteInvoice);


