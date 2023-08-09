import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

/*
The _app.js file in Next.js is like the master controller for your entire application. 
It wraps all pages, allowing you to inject global styles, layouts, state management, or 
any other common features that need to be applied to every page in your app. It's a powerful tool 
that helps you maintain consistency and share functionality across your entire Next.js application.

*/