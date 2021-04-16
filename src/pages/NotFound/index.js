import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';

export default function NotFound() {
  return (
    <Layout showHeader={false}>
      <h1 style={{ textAlign: 'center', marginTop: 'var(--space-32x)' }}>Page Not Found 404</h1>
      <Link to="/" style={{ fontSize: 'var(--text-xl)', textAlign: 'center' }}>
        Go back
      </Link>
    </Layout>
  );
}