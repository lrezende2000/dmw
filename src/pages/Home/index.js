import { useContext, useState } from 'react';

import { PageContext } from '../../context';

import Layout from '../../components/Layout';
import Title from '../../components/Title';
import Form from '../../components/Form';
import Ticket from '../../components/Ticket';

export default function Home() {
  const [user, setUser] = useState({});
  const { page } = useContext(PageContext);

  return (
    <Layout>
      {
        page === 'main' ? (
          <>
            <Title />
            <Form setUser={setUser} />
          </>
        ) : (
          <Ticket userInfo={user} />
        )
      }
    </Layout>
  );
}