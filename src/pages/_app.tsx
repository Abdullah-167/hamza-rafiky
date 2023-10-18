import "@/styles/globals.css";
import "keen-slider/keen-slider.min.css"
import 'rc-slider/assets/index.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import type { AppProps } from "next/app";
import { withTranslateRoutes } from "next-translate-routes";
import Script from 'next/script'

function App({ Component, pageProps }: AppProps) {
  return <>
  {/* Global Site Tag (gtag.js) - Google Analytics */}
  <Script
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=GTM-5V79GVK`}
  />
  <Script
    id="gtag-init"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GTM-5V79GVK', {
          page_path: window.location.pathname,
        });
      `,
    }}
  />
  <Component {...pageProps} />
</>
}
export default withTranslateRoutes(App);
