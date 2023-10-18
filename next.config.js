/** @type {import('next').NextConfig} */
const withTranslateRoutes = require("next-translate-routes/plugin");

const nextConfig = withTranslateRoutes({
  reactStrictMode: true,
  i18n: {
    locales: ["it", "de", "fr", "en"],
    defaultLocale: "it",
    localeDetection: true,
  },
  images: {
    domains: ["manuelm83.sg-host.com", "2.gravatar.com"],
  },
});

module.exports = nextConfig;
