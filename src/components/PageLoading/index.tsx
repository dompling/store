import React, { FC } from 'react';
import { ActivityIndicator } from 'antd-mobile';

export default () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ margin: 'auto' }}>
      <ActivityIndicator text={'加载中...'} />
    </div>
  </div>
);

export const NoneText: FC = ({ children }) => (
  <div style={{ display: 'flex', height: '100vh', padding: '100px 0' }}>
    <div style={{ margin: 'auto' }}>{children}</div>
  </div>
);
