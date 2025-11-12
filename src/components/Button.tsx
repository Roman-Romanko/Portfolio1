interface ButtonProps {
  variant?: "cv" | "request" | "email" | "icon";
  size?: "sm" | "lg" | "icon";
  color?: string; 
  children: React.ReactNode;
  className?: string;
  rounded?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "cv",
  size = "sm",
  color = "", 
  children,
  className = "",
  rounded = "rounded-md",
  onClick,
}) => {
  let variantClasses = "";

  switch (variant) {
    case "cv":
      variantClasses = "border border-orange-400 bg-transparent text-white hover:border-orange-600";
      break;
    case "request":
      variantClasses = "bg-rose-500 text-white hover:bg-rose-700";
      break;
    case "email":
      variantClasses = "border border-gray-300 text-gray-700 hover:bg-gray-100";
      break;
    case "icon":
      variantClasses = "text-white";
      break;
    default:
      variantClasses = "bg-blue-600 text-white hover:bg-blue-700";
  }

  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "lg":
      sizeClasses = "px-6 py-3 text-lg";
      break;
    case "icon":
      sizeClasses = "w-10 h-10 flex items-center justify-center";
      break;
    default:
      sizeClasses = "px-4 py-2 text-base";
  }

  return (
    <button
      onClick={onClick}
      className={`${variantClasses} ${sizeClasses} ${rounded} ${color} font-medium transition-colors duration-300 disabled:opacity-50 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
