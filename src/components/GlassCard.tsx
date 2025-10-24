import * as React from 'react';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';

const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'liquid-glass liquid-glass-hover overflow-hidden border rounded-2xl',
          className
        )}
        {...props}
      />
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;
