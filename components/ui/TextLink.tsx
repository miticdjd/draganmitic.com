import Link from 'next/link';
import { cn, textLink, textLinkIcon } from '@/lib/styles';
import { ArrowRight, ArrowUpRight } from './icons';

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: 'up-right' | 'right';
  external?: boolean;
};

export default function TextLink({
  href,
  children,
  className,
  icon = 'up-right',
  external = false,
}: TextLinkProps) {
  const Icon = icon === 'right' ? ArrowRight : ArrowUpRight;
  const content = (
    <>
      {children}
      <Icon className={textLinkIcon} />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(textLink, className)}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(textLink, className)}>
      {content}
    </Link>
  );
}
