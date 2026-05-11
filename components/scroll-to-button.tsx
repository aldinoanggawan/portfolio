'use client';

import { Button } from '@/components/ui/button';

interface ScrollToButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  size?: React.ComponentProps<typeof Button>['size'];
  variant?: React.ComponentProps<typeof Button>['variant'];
}

export const ScrollToButton = ({
  targetId,
  children,
  className,
  size = 'lg',
  variant,
}: ScrollToButtonProps) => {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Button
      size={size}
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
