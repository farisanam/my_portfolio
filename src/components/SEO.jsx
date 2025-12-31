import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  image = "https://portfolio-nuf5ri3p0-farisanams-projects.vercel.app/og-image.png",
  url = "https://portfolio-nuf5ri3p0-farisanams-projects.vercel.app",
}) {
  return (
    <Helmet>
      <html lang="id" />
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Farisan Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
