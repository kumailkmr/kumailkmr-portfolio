interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle ? <p className="mt-3 text-base text-muted-foreground/90">{subtitle}</p> : null}
    </div>
  );
}
