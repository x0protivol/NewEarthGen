import dynamic from 'next/dynamic';

const PageInner = dynamic(() => import('./pageInner'), {
  ssr: false, // This will make the component only render on the client side
  loading: () => <p>Loading...</p> // Optional loading component
});

export default PageInner;
