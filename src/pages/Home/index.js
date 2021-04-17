import { useContext } from 'react';

import { PageContext } from '../../context';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Form from '../../components/Form';

export default function Home() {
  const { page } = useContext(PageContext);

  return (
    <Layout>
      {
        page === 'main' ? (
          <>
            <Title />
            <Form />
          </>
        ) : (
          <h1>Outra</h1>
        )
      }
    </Layout>
  );
}