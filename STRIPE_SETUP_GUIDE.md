import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HomePage from '@/pages/Home/index';
import NotFoundPage from '@/pages/NotFound/index';
import Layout from '@/components/Layout';

const GalleryPage = lazy(() => import('@/pages/Gallery/index'));
const ContactPage = lazy(() => import('@/pages/Contact/index'));
const EventsPage = lazy(() => import('@/pages/Events/index'));
const EventContactPage = lazy(() => import('@/pages/EventContact/index'));
const CorporatePage = lazy(() => import('@/pages/Corporate/index'));
const BlogPage = lazy(() => import('@/pages/Blog/index'));
const BlogPostPage = lazy(() => import('@/pages/BlogPost/index'));
const CelebrationsPage = lazy(() => import('@/pages/Celebrations/index'));

const Lazy = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-primary">Loading...</div>}>
    {children}
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/gallery',
        element: <Lazy><GalleryPage /></Lazy>,
      },
      {
        path: '/contact',
        element: <Lazy><ContactPage /></Lazy>,
      },
      {
        path: '/events',
        element: <Lazy><EventsPage /></Lazy>,
      },
      {
        path: '/event-enquiry',
        element: <Lazy><EventContactPage /></Lazy>,
      },
      {
        path: '/corporate',
        element: <Lazy><CorporatePage /></Lazy>,
      },
      {
        path: '/blog',
        element: <Lazy><BlogPage /></Lazy>,
      },
      {
        path: '/blog/:slug',
        element: <Lazy><BlogPostPage /></Lazy>,
      },
      {
        path: '/celebrations',
        element: <Lazy><CelebrationsPage /></Lazy>,
      },
      {
        path: '/how-it-works',
        element: <HomePage />, // Redirecting to Home as it has the section
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
