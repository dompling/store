import { useState } from 'react';

export default function InitialiseModel() {
  const [isScriptable, setScriptable] = useState<boolean>(false);
  return { isScriptable, setScriptable };
}
