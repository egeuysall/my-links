import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import type { Link as LinkProps } from '@/types/link-types';
import { toTitleCase } from '@/utils/functions';

export const LinkCard: React.FC<LinkProps> = ({ link, shortName, description }) => {
  return (
    <Link
      href={link}
      className="no-underline hover:opacity-75 duration-200 ease-in-out transition-opacity h-full"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{toTitleCase(shortName.replace(/[-_]/g, ' '))}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
