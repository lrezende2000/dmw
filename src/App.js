import { useState } from 'react';
import { PageContext } from './context';

import Routes from './routes';
import GlobalStyles from './globalStyles';

function App() {
  const [page, setPage] = useState('main');

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <GlobalStyles />
      <Routes />
    </PageContext.Provider>
  );
}

export default App;
