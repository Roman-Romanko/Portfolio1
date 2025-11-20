import { Star, StarHalf, StarOff } from "lucide-react";

type StarsProps = {
  value: number;
  max?: number;
  size?: number;
  color?: string;
};

export const Stars = ({ value, max = 5, size = 24, color = "#16a34a" }: StarsProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => {
        const starNumber = i + 1;

        const iconProps = {
          key: i,
          size: size,
          color: color,
          className: "shrink-0",   // ← не дозволить зменшувати іконку
        };

        if (value >= starNumber) {
          return <Star {...iconProps} fill={color} />;
        }

        if (value + 0.5 >= starNumber) {
          return <StarHalf {...iconProps} fill={color} />;
        }

        return <StarOff {...iconProps} color="#ccc" />;
      })}
    </div>
  );
};
