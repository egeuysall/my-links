import type { Metadata } from 'next';
import { links } from '@/lib/links';
import { toTitleCase } from '@/utils/functions';

export const revalidate = 3600;
export const dynamic = 'auto';

export async function generateMetadata({ params }: { params: { shortName: string } }): Promise<Metadata> {
  const { shortName } = params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.link.egeuysal.com';
  const canonical = `${siteUrl.replace(/\/$/, '')}/${shortName}`;

  const found = links.find((entry) => entry.shortName === shortName);

  if (!found) {
    return {
      title: 'Link Not Found',
      description: `No short link exists for "${shortName}"`,
      openGraph: {
        title: 'Link Not Found',
        description: `No short link exists for "${shortName}"`,
        url: canonical,
        type: 'website',
      },
      twitter: {
        card: 'summary',
        title: 'Link Not Found',
        description: `No short link exists for "${shortName}"`,
      },
      alternates: { canonical },
    };
  }

  const title = toTitleCase(found.shortName.replace(/[-_]/g, ' '));

  return {
    title,
    description: found.description,
    openGraph: {
      title,
      description: found.description,
      url: found.link,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description: found.description,
    },
    alternates: { canonical },
  };
}

export default function ShortNameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
