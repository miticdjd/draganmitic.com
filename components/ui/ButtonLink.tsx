import Link from 'next/link';
import { button, cn } from '@/lib/styles';
import { ArrowUpRight } from './icons';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ButtonLink({ href, children, className }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(button, className)}>
      {children}
      <ArrowUpRight />
    </Link>
  );
}
