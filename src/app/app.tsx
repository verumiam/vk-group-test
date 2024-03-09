import { Spinner } from '@vkontakte/vkui';
import { Suspense } from 'react';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const GroupPage = lazy(() => import('@/pages/groups'));
const NoPage = lazy(() => import('@/pages/nopage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Spinner
            style={{ position: 'absolute', top: '50%', left: '50%', translate: '-50% -50%' }}
            size="large"
          />
        }
      >
        <Routes>
          <Route index element={<GroupPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
