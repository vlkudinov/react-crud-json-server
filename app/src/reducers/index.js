import {combineReducers} from "redux";
import { connectRouter } from 'connected-react-router';
import {handleActions} from "redux-actions";
import * as actions from "../actions";

const invoices = handleActions({
    [actions.loadInvoices](state, {payload: {invoices}}) {
      return invoices;
    },
    [actions.createInvoice](state, {payload: {invoices}}) {
      return invoices;
    },
    [actions.updateInvoice](state, {payload: {invoices}}) {
      return invoices;
    },
    [actions.deleteInvoice](state, {payload: {invoices}}) {
      return invoices;
    }
  }, []);

export default (history) => combineReducers({
  router: connectRouter(history),
  invoices,
});
