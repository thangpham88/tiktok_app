import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { MainLayout } from '~/layouts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            // eslint-disable-next-line
            publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : route.layout || MainLayout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
