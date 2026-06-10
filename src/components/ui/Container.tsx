type ContainerProps = {
  width?: "narrow" | "default" | "wide" | "full";
  children: React.ReactNode;
  className?: string;
};

// Larguras espelhadas da referência: 1030 / 1095 / 1180 / 1500
const widths = {
  narrow: "max-w-[1030px]",
  default: "max-w-[1095px]",
  wide: "max-w-[1180px]",
  full: "max-w-[1500px]",
};

export function Container({ width = "default", children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 ${widths[width]} ${className}`}>
      {children}
    </div>
  );
}
