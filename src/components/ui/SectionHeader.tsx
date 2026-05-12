import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  ghostText?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  ghostText,
  centered = true,
  className,
  light = false
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-16 relative",
      centered ? "text-center" : "text-left",
      className
    )}>
      {ghostText && (
        <RevealOnScroll>
          <h2 className={cn(
            "text-viettel-red text-3xl md:text-5xl font-extrabold uppercase mb-2 opacity-20 leading-none",
            !centered && "text-left"
          )}>
            {ghostText}
          </h2>
        </RevealOnScroll>
      )}
      
      <RevealOnScroll className="relative z-10">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold mb-4",
          light ? "text-white" : "text-viettel-dark"
        )}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn(
            "max-w-2xl text-lg font-normal",
            centered ? "mx-auto" : "mr-auto",
            light ? "text-red-100" : "text-gray-500"
          )}>
            {subtitle}
          </p>
        )}
      </RevealOnScroll>
    </div>
  );
}
