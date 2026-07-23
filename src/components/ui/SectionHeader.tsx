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

export function SectionHeader(props: SectionHeaderProps) {
  const {
    title,
    subtitle,
    centered = true,
    className,
    light = false
  } = props;

  return (
    <div className={cn(
      "mb-16 relative",
      centered ? "text-center" : "text-left",
      className
    )}>

      
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
