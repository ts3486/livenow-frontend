import type { AppProps } from 'next/app';
import { wrapper } from '../store/store';
import Layout from '../components/layout/Layout';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  <Layout>
    <Component {...pageProps} />
  </Layout>;
}
export default wrapper.withRedux(MyApp);
