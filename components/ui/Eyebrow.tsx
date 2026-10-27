import { cn, eyebrow } from '@/lib/styles';

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span';
};

export default function Eyebrow({ children, className, as: Tag = 'p' }: EyebrowProps) {
  return <Tag className={cn(eyebrow, className)}>{children}</Tag>;
}
