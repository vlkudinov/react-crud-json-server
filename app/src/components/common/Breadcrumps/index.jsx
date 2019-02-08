import React from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb, Icon} from 'antd';
import "./style.scss";

const Breadcrumbs  = () => (
  <div className="breadcrumbs">
    <Breadcrumb>
      <Breadcrumb.Item key="home">
        <Link to={'/'}>
          <Icon type="home" />
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
          {'Form'}
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export default Breadcrumbs;