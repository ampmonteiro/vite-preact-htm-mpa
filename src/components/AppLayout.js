import { html } from 'htm/preact';
export default function AppLayout({ children }) {
  return html`
    <header>
      <h3>MPA Blog ${'<='} Vite + Preact ( htm )</h3>
      <nav>
        <a href="/">HOME</a>
        <a href="/about/">ABOUT</a>
      </nav>
    </header>
    <main>${children}</main>

    <footer>
      <p>© 2023 AMPM</p>
      <p>Powered by: Preact || Developed with: Vite</p>
    </footer>
  `;
}
