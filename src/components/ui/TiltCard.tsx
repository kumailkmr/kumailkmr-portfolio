import React from "react";
import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => (
  <Tilt
    tiltMaxAngleX={8}
    tiltMaxAngleY={8}
    glareEnable={false}
    perspective={1000}
    transitionSpeed={400}
    scale={1.02}
    className={cn(
      "relative rounded-xl border border-transparent transition-all duration-300",
      "hover:border-[#d4af37] hover:shadow-[0_0_20px_4px_rgba(212,175,55,0.4)]",
      className
    )}
  >
    {children}
  </Tilt>
);

export default TiltCard;
