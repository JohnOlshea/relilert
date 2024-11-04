import { FC, ReactElement } from "react";
import { FaCircleNotch } from "react-icons/fa";

interface LoadingSpinnerProps {
  color?: string;
  width?: number;
  height?: number;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  color = "#50b5ff",
  width = 40,
  height = 40
}): ReactElement => {
  return (
      <FaCircleNotch
        className="animate-spin mr-3"
        color={color}
        style={{ width, height }}
      />
  );
};

export default LoadingSpinner;
