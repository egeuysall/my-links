import { redirect } from 'next/navigation';
import { links } from '@/lib/links';

interface Props {
  params: Promise<{ shortName: string }>;
}

const DynamicLinks = async ({ params }: Props) => {
  const { shortName } = await params;

  const found = links.find((entry) => entry.shortName === shortName);

  if (found) {
    redirect(found.link);
  }

  return (
    <div>
      <h1>Link not found</h1>
      <p>No short link exists for &quot;{shortName}&quot;</p>
    </div>
  );
};

export default DynamicLinks;
