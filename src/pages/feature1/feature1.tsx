import { useState } from 'react';
import ComponentPartOne from './components/ComponentPartOne';
import ComponentPartTwo from './components/ComponentPartTwo';

function Feature1() {
  const [first, setfirst] = useState<any>(null);
  return (
    <div>
      <ComponentPartOne />
      <ComponentPartTwo />
    </div>
  );
}

export default Feature1;
