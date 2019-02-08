import React from 'react';
import {Form, DatePicker, Input, Col, Button, Icon} from 'antd';
import PropTypes from "prop-types";
import moment from 'moment';
import './style.scss'

const InputGroup = Input.Group;
const {TextArea} = Input;

class InvoiceForm extends React.Component {
  
  handleSubmit(e) {
    e.preventDefault();
    const { redirect, onSubmit, form : {validateFields} } = this.props;
    
    validateFields(async(err, fieldsValue) => {
      if (!err) {
        
        const values = await {
          ...fieldsValue,
          'date_created': fieldsValue['date_created'].format('D MMMM YYYY'),
        };
        await onSubmit(values);
        redirect('/');
      }
    });
    
  };
  render() {
    const {getFieldDecorator} = this.props.form;
    const dateFormat = 'D MMMM YYYY';
    const config = {rules: [{required: true, message: 'Please input value!'}]};
    return (
      <div className="form-container">
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <InputGroup size="large">
          <Col xl={11}>
            <Form.Item label="ID" >
              {getFieldDecorator('id', config)(<Input disabled={true} addonAfter={<Icon type="setting"/>}/>)}
            </Form.Item>
          </Col>
          <Col xl={{span:11, offset:2}}>
            <Form.Item label="Invoice Date">
              {getFieldDecorator('date_created', config)(
                <DatePicker format={dateFormat}  placeholder='Select invoice date' />)}
            </Form.Item>
          </Col>
        </InputGroup>
        <InputGroup size="large">
          <Col xl={11}>
            <Form.Item label="Name" >
              {getFieldDecorator("name", config)(<Input placeholder='Name'/>)}
            </Form.Item>
          </Col>
          <Col xl={{span:11, offset:2}}>
            <Form.Item label="Country" >
              {getFieldDecorator("country", config)(<Input placeholder='Country'/>)}
            </Form.Item>
          </Col>
        </InputGroup>
        <InputGroup size="large">
          <Col xl={24}>
            <Form.Item label="Comment">
              {getFieldDecorator('comment', {
                rules: [{required: true, message: 'Please input comment!'}],
              })(<TextArea autosize placeholder='Comment'/>)}
            </Form.Item>
          </Col>
        </InputGroup>
        <Form.Item wrapperCol={{offset: 22}}>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

InvoiceForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  invoice: PropTypes.object,
};

export default Form.create({
  mapPropsToFields(props) {
    if (props.invoice) {
      return {
        id: Form.createFormField({ value: props.invoice.id}),
        date_created: Form.createFormField({value: moment(props.invoice.date_created)}),
        name: Form.createFormField({ value: props.invoice.name}),
        country: Form.createFormField({ value: props.invoice.country}),
        number: Form.createFormField({ value: props.invoice.number}),
        comment: Form.createFormField({value: props.invoice.comment}),
      };
    }
    return {
      id: Form.createFormField({value: props.invoiceID}),
    };
  }
})(InvoiceForm);
