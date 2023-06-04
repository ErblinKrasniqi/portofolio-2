import Head from "next/head";

const Analytics = () => {
  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LX9QRPGD20"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LX9QRPGD20');
          `,
        }}
      ></script>
    </Head>
  );
};

export default Analytics;
