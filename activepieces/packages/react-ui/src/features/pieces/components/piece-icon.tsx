
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import ImageWithFallback from '@/components/ui/image-with-fallback';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const pieceIconVariants = cva(
  'flex items-center justify-center text-accent-foreground',
  {
    variants: {
      circle: {
        true: 'rounded-full bg-accent/35 p-2 dark:bg-gray-800',
        false: 'dark:rounded-[2px]',
      },
      size: {
        xxl: 'size-[64px] p-4',
        xl: 'size-[48px]',
        lg: 'size-[40px]',
        md: 'size-[36px]',
        sm: 'size-[25px]',
      },
      border: {
        true: 'border border-solid dark:border-white',
      },
    },
    defaultVariants: {},
  },
);

interface PieceIconCircleProps extends VariantProps<typeof pieceIconVariants> {
  displayName?: string;
  logoUrl?: string;
  showTooltip: boolean;
}

const PieceIcon = React.memo(
  ({
    displayName,
    logoUrl,
    border,
    size,
    circle = false,
    showTooltip,
  }: PieceIconCircleProps) => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              pieceIconVariants({ border, size, circle }),
              'dark:bg-gray-800'
            )}
          >
            {logoUrl ? (
              <ImageWithFallback
                src={logoUrl}
                alt={displayName}
                className="object-contain w-full h-full rounded-full dark:bg-gray-700 dark:brightness-150 dark:contrast-125"
                key={logoUrl}
                fallback={
                  <Skeleton className="rounded-full w-full h-full dark:bg-gray-700" />
                }
              />
            ) : (
              <Skeleton className="rounded-full w-full h-full dark:bg-gray-700" />
            )}
          </div>
        </TooltipTrigger>
        {showTooltip ? (
          <TooltipContent side="bottom">{displayName}</TooltipContent>
        ) : null}
      </Tooltip>
    );
  },
);

PieceIcon.displayName = 'PieceIcon';
export { PieceIcon };
