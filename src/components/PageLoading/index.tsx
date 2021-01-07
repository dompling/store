import React from 'react';
import type { CSSProperties, FC } from 'react';
import { ActivityIndicator } from 'antd-mobile';

export default () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ margin: 'auto' }}>
      <ActivityIndicator text={'加载中...'} />
    </div>
  </div>
);

export const NoneText: FC<{ style?: CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      display: 'flex',
      height: '80vh',
      fontSize: '0.4rem',
      color: '#888',
      ...style,
    }}
  >
    <div style={{ margin: 'auto', textAlign: 'center' }}>{children}</div>
  </div>
);
