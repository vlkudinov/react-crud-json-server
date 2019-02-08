import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Table, Divider} from 'antd';
import moment from 'moment';
import "./style.scss";

const {Column} = Table;

const InvoiceTable = ({invoices, onDelete}) => (
  <div className="table-container">
    <Table dataSource={invoices} rowKey={record => record.id}>
      <Column
        title="ID"
        dataIndex="id"
        render={number => <a href="javascript:;">{number}</a>}
      />
      <Column
        title="Create"
        dataIndex="date_created"
        render={date => <p>{moment(date).format('D MMMM YYYY')}</p>}
      />
      <Column
        title="Name"
        dataIndex="name"
      />
      <Column
        title="Country"
        dataIndex="country"
      />
      <Column
        title="Comment"
        dataIndex="comment"
      />
      <Column
        title="Action"
        className="table__actions"
        render={(invoice) => (
          <span>
          <Link to={{pathname: `/edit/${invoice.id}`, state: {...invoice}}}>Edit</Link>
          <Divider type="vertical"/>
          <a onClick={() => onDelete(invoice.id)}>Delete</a>
        </span>
        )}
      />
    </Table>
  </div>
);

InvoiceTable.propTypes = {
  invoices: PropTypes.array.isRequired,
};

export default InvoiceTable;
