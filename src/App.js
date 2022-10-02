import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            {publicRoutes.map((r, index) => {
              return (
                <li key={index}>
                  <Link to={r.path}>{r.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Routes>
          {
            // eslint-disable-next-line
            publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout === null ? Fragment : route.layout || DefaultLayout;
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
