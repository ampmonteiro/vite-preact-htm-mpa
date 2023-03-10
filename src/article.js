import { html } from 'htm/preact';
import { render } from 'preact';
import AppLayout from './components/AppLayout';
import { load } from './utils';

const Article = ({ title, content = [], date }) => html`
  <h1>${title}</h1>
  <p>${date}</p>

  ${content.map((v, index) => html`<p key=${index}>${v}</p>`)}
`;

const App = ({ item }) => html`
  <${AppLayout}>
    <${Article}
      title=${item.title}
      content=${item.content}
      date=${item.date}
    />
  <//>
`;

const preactStart = (data = []) =>
  render(html`<${App} item=${data} />`, document.body);

load(preactStart, false);
