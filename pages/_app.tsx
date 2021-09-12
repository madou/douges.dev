/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import css from 'design-system/css';
import '@atlaskit/css-reset';
import '@atlaskit/tokens/css/atlassian-light.css';
import '@atlaskit/tokens/css/atlassian-dark.css';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import IconButton from 'design-system/icon-button';
import toggleTheme from 'lib/toggle-theme';
import components from 'components/blog-mdx-components';
import { token } from '@atlaskit/tokens';
import LayoutBlog from 'components/layout-blog';

const styles = css({
  navBar: {
    position: 'relative',
    padding: '16px 16px 0',
    display: 'flex',
    '> :last-child': {
      marginLeft: 'auto',
    },
  },
  header: {
    borderTop: `8px solid ${token('color.background.boldBrand.resting')}`,
  },
});

const themeHacks = `
:root, html[data-theme="light"] {
  --overlay-hover: rgba(0, 0, 0, 0.05) !important;
  --overlay-pressed: rgba(0, 0, 0, 0.1) !important;
}

html[data-theme="dark"] {
  --overlay-hover: rgba(255, 255, 255, 0.05) !important;
  --overlay-pressed: rgba(255, 255, 255, 0.1) !important;
}
`;

function App({ Component, pageProps, router }: AppProps) {
  const isBlogRoute = router.route.startsWith('/blog');

  return (
    <MDXProvider components={components}>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var p=/theme=(.+;?)/.exec(document.cookie);if(p) document.documentElement.setAttribute('data-theme',p[1])}catch(e){}})()`,
          }}
        />
        <style>
          {'*{box-sizing:border-box;scrollbar-color:var(--border-neutral) var(--background-default)}::-webkit-scrollbar{background-color:var(--background-default);width:10px}::-webkit-scrollbar-thumb{background-color:var(--border-neutral);border-radius:30px}' +
            themeHacks}
        </style>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏒</text></svg>"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@itsdouges" />
        <script data-respect-dnt async src="https://cdn.splitbee.io/sb.js" />
      </Head>

      <header css={styles.header}>
        <nav css={styles.navBar}>
          {isBlogRoute && (
            <IconButton
              data-splitbee-event="Go Home"
              icon="←"
              label="Go home"
              onClick={() => router.push('/')}
            />
          )}
          <IconButton
            data-splitbee-event="Switch Theme"
            icon="☾"
            label="Switch theme"
            onClick={toggleTheme}
          />
        </nav>
      </header>

      {isBlogRoute ? (
        <LayoutBlog blog={(Component as any).meta}>
          <Component {...pageProps} />
        </LayoutBlog>
      ) : (
        <Component {...pageProps} />
      )}
    </MDXProvider>
  );
}

export default App;
