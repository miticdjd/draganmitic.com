import { SOCIAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/styles';
import { ArrowUpRight } from './ui/icons';

type SocialLinksProps = {
  variant?: 'inline' | 'grid';
  className?: string;
};

export default function SocialLinks({ variant = 'inline', className }: SocialLinksProps) {
  return (
    <div
      className={cn(
        variant === 'grid'
          ? 'grid grid-cols-2 gap-y-6 max-md:flex max-md:flex-wrap max-md:gap-[25px]'
          : 'flex flex-wrap gap-[23px] max-md:gap-[22px]',
        className
      )}
    >
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[7px] text-[11px] hover:text-accent"
        >
          {social.name}
          <ArrowUpRight className="size-3" />
        </a>
      ))}
    </div>
  );
}
