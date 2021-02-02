import { useState } from 'react';

export default function BoxJSModel() {
  const [data, setBoxJS] = useState<any>({});
  return { data, setBoxJS };
}
