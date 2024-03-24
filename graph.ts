import fs from 'fs';

import { createModuleGraph } from '@thepassle/module-graph';
import { typescript } from '@thepassle/module-graph/plugins/typescript.js';

const config = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));

console.log(config);

const moduleGraph = createModuleGraph('./src/app/page.tsx', {
  plugins: [typescript(config)]
});


moduleGraph.then(res=> {
  console.log(res)
})
