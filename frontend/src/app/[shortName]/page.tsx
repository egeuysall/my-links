import { redirect } from 'next/navigation';
import { links } from '@/lib/links';

interface Props {
  params: { shortName: string };
}

const DynamicLinks = ({ params }: Props) => {
  const { shortName } = params;

  const found = links.find((entry) => entry.shortName === shortName);

  if (found) {
    redirect(found.link);
  }

  return (
    <div>
      <h1>Link not found</h1>
      <p>No short link exists for "{shortName}"</p>
    </div>
  );
};

export default DynamicLinks;
