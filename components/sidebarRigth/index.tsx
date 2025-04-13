import React from 'react';
// import { ThemeToggle } from '@/components/theme-toggle'; // Assuming you have a ThemeToggle component
import Link from 'next/link';

const sidebarItems = [
  { href: '#installation', label: 'Installation' },
  { href: '#usage', label: 'Usage' },
  { href: '#examples', label: 'Examples' },
  { href: '#changelog', label: 'Changelog' },
  { href: '#accessibility', label: '11-03-2024 a11y for title and description' }, // Example
];

const SideBarRigth = () => {
  return (
    <aside className="hidden md:block w-64 flex-shrink-0 p-6">
      <div className="sticky top-8">
        <div className="mb-8">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground dark:text-muted-foreground/80">
            On This Page
          </h3>
          <nav className="mt-2 space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary dark:text-foreground/80 dark:hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="bg-card text-card-foreground rounded-md p-4 shadow-sm dark:bg-card/90 dark:text-card-foreground/80">
          <h4 className="text-sm font-semibold mb-2">Deploy your shadcn/ui app on Vercel</h4>
          <p className="text-xs text-muted-foreground dark:text-muted-foreground/80 mb-4">
            Trusted by OpenAI, Sonos, Chick-fil-A, and more.
          </p>
          <p className="text-xs text-muted-foreground dark:text-muted-foreground/80 mb-4">
            Vercel provides tools and infrastructure to deploy apps and features at scale.
          </p>
          <Link href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fshadcn-ui%2Fshadcn-ui&project-name=shadcn-ui&utm_source=shadcn-ui&utm_medium=banner&utm_campaign=shadcn-ui" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4">
              Deploy Now
            </button>
          </Link>
        </div>

        <div className="mt-8">
          {/* <ThemeToggle /> Assuming you have this component */}
        </div>
      </div>
    </aside>
  );
};

export default SideBarRigth