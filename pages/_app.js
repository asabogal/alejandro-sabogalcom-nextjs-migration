import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet';
import Layout from '../components/navigation/Layout';
import '../components/utils/buttons.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: #324955;
    background-color: #f5f8fa;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alejandro Sabogal</title>
        <meta name="description" content="Software and Web Developer. Work Portfolio Site." />
        <meta name="keywords" cpntent="alejandro, sabogal, alejandro sabogal, web developer, full stack developer, full-stack developer, full stack, full-stack, developer, portfolio" />
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:500&display=swap" rel="stylesheet" />       
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
 
    </>
  )
}
