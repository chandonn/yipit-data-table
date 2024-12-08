import { BsPlusCircle } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";

type ButtonProps = {
  label?: string;
  icon?: "plus" | "document";
};

export const Button = ({ icon, label }: ButtonProps) => {
  switch (icon) {
    case "plus": {
      return (
        <button>
          <BsPlusCircle></BsPlusCircle>
        </button>
      );
    }

    case "document": {
      return (
        <button>
          <BsFileEarmarkText></BsFileEarmarkText>
        </button>
      );
    }

    default:
      return <button>{label}</button>;
  }
};
