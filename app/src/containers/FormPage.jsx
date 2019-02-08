import React from "react";
import {connect} from "react-redux";
import { push } from 'connected-react-router'
import * as actions from "../actions";
import InvoiceForm from '../components/InvoiceForm'
import { Layout } from 'antd';
import PageTitle from '../components/common/PageTitle';
import Breadcrumbs from '../components/common/Breadcrumps';
import { getFormAction, getPageTitle, getInvoice} from '../selectors';


class FormPage extends React.Component {
  render() {
    const {title, invoice, formAction,  redirect} = this.props;
    
    return (
      <Layout>
        <PageTitle title={title}/>
        <Breadcrumbs/>
        <InvoiceForm
          invoice={invoice}
          onSubmit={this.props[formAction]}
          redirect={redirect}/>
      </Layout>
    );
  }
}

const mapStateToProps = ({router : {location}}) =>
  ({
    title: getPageTitle(location.pathname),
    formAction: getFormAction(location.pathname),
    invoice: getInvoice(location.state)
  });

const mapDispatchToProps = dispatch => ({
  onCreate: invoice => dispatch(actions.createInvoice(invoice)),
  onUpdate: invoice => dispatch(actions.updateInvoice(invoice)),
  redirect: path => dispatch(push(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPage);
