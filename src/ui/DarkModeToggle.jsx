import { useDarkMode } from "../context/DarkModeContext";

import { HiOutlineMoon } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";

function DarkModeToggle() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      <HiOutlineMoon />
    </ButtonIcon>
  );
}

export default DarkModeToggle;
