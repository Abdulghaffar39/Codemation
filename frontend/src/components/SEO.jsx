import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalPath = '' }) => {
    const siteUrl = 'https://codemation.agency';
    const siteName = 'Codemation';
    const fullUrl = `${siteUrl}${canonicalPath}`;
    const defaultImage = `${siteUrl}/og-image.png`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={defaultImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={defaultImage} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Codemation" />
            <meta name="theme-color" content="#D4A843" />
        </Helmet>
    );
};

export default SEO;
