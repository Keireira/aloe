import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInspector } from 'effector-inspector';

createInspector();

import AppRoot from '@core/Root';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<AppRoot />);
