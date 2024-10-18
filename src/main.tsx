import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import HomePageImg from './assets/portfolio/Personal-Website.png';
import { Article } from './pages/Article/Article.tsx';
import { Contact } from './pages/Contact/Contact.tsx';
import { articleLoader } from './pages/DevLog/Articles/articleLoader.ts';
import { Home } from './pages/Home/Home.tsx';
import { Portfolio } from './pages/Portfolio/Portfolio.tsx';
import { DevLog } from './pages/index.ts';
import { darkTheme } from './theme.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'portfolio',
    element: <Portfolio />,
  },
  {
    path: 'devlog',
    element: <DevLog />,
  },
  {
    // TODO: why is articleId not typed anywhere?
    // maybe string interp articleId from enum or type?
    path: 'devlog/:articleId',
    element: <Article />,
    loader: articleLoader,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'img.png',
    element: <img src={HomePageImg} />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
