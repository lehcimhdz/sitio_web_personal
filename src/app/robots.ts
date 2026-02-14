
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://michel-cano.netlify.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Example of blocking a path if needed
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
