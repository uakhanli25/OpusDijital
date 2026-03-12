import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonicalUrl }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    if (title) {
      document.title = `${title} | Opus Dijital`;
    } else {
      document.title = 'Opus Dijital | Dijital Geleceğiniz & Yazılım Çözümleri';
    }

    // Update Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }

    // Update Canonical URL
    const baseUrl = 'https://opusdijital.com';
    const currentPath = canonicalUrl || location.pathname;
    const fullUrl = `${baseUrl}${currentPath === '/' ? '' : currentPath}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullUrl);

    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', fullUrl);
    }

  }, [title, description, canonicalUrl, location.pathname]);

  return null;
};

export default SEO;
