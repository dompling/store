import { useState } from 'react';

export default function initialiseModel() {
  const [isScriptable, setScriptable] = useState<boolean>(false);
  return { isScriptable, setScriptable };
}
