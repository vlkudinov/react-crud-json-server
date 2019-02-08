import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";
import {Link} from "react-router-dom";
import {Button} from 'antd';
import {Layout} from 'antd';
import PageTitle from '../components/common/PageTitle'
import Actions from "../components/Actions";
import InvoicesTable from '../components/InvoiceTable';


class HomePage extends React.Component {
  async componentDidMount() {
    await this.props.loadInvoices();
  }
  
  render() {
    return (
      <Layout>
        <PageTitle title={'Invoices'}/>
        <Actions>
          <Button type="primary">
            <Link className="link" to={{pathname: "/create" }}>
              <span className="link__text">Add new</span>
            </Link>
          </Button>
        </Actions>
        <InvoicesTable {...this.props}/>
      </Layout>
    );
  }
}

const mapStateToProps = ({invoices}) => ({
    invoices: invoices.reverse()
});

const mapDispatchToProps = dispatch => ({
    loadInvoices: invoices => dispatch(actions.loadInvoices(invoices)),
    onDelete: id => dispatch(actions.deleteInvoice(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
