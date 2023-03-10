import { render } from 'preact';
import { html } from 'htm/preact';
import AppLayout from './components/AppLayout';
import { load } from './utils';

const Item = ({ val }) => html` <article>
  <h2>${val.title}</h2>
  <p class="article-info">
    ${val.date}
    <a href="/article/?id=${val.id}">read</a>
  </p>
</article>`;

const List = ({ items = [] }) => {
  const rs =
    items.length > 0 &&
    items.map((v) => html`<${Item} key=${v.id} val=${v} />`);

  if (!rs) {
    return html` <p>no data</p>`;
  }

  return rs;
};

const App = ({ data, error }) => html`
  <${AppLayout}>
    <h1>Blog</h1>
    ${!error && html` <${List} items=${data} />`}
    ${error && html`<p>Something wrong happen</p>`}
  <//>
`;

const preactStart = (data = [], error = false) =>
  render(html`<${App} data=${data} error=${error} />`, document.body);

load(preactStart);
