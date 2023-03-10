import { html } from 'htm/preact';
import { render } from 'preact';

import AppLayout from './components/AppLayout';

const App = () => html`
  <${AppLayout}>
    <h1>About</h1>
    <p>Goals of this website is to demonstrate:</p>
    <ul>
      <li>Building a simple MPA (Multi Page Application)</li>
      <li>Using Vite</li>
      <li>Using Preact</li>
      <li>Using HTM lib (alternative to JSX)</li>
    </ul>
  <//>
`;

render(html`<${App} />`, document.body);
