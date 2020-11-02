import App from "next/app";
import "antd/dist/antd.css";
import Layout from "../components/Layout";

class MyApp extends App {
  static async getInitialProps(ctx) {
    const { Component } = ctx;
    let pageProps;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps
    };
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      //   <Provider store={reduxStore}>
      //     {this.state.loading ? <PageLoading /> : null}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      //   </Provider>
    );
  }
}

export default MyApp;
