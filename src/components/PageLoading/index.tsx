import React from 'react';
import {ActivityIndicator} from 'antd-mobile';

export default () => (
  <div style={{display: 'flex', height: '100vh'}}>
    <div style={{margin: 'auto'}}>
      <ActivityIndicator text={'加载中...'} />
    </div>
  </div>
)
