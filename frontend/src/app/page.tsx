import { links } from '@/lib/links';
import { LinkCard } from '@/components/blocks/link-card';

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col gap-12">
      <section className="w-full flex flex-col gap-2xs">
        <h1>My Links</h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          My Links is my hub for organizing and sharing all of my important links in one place.
        </p>
      </section>

      <section className="w-full flex flex-col gap-md">
        <h2 className="text-h3 leading-h3 tracking-h3">All Links</h2>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {links.map((link) => {
            return <LinkCard {...link} key={link.shortName} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Landing;
