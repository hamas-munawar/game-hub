import { HStack, Image, Button } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { useColorMode } from "./ui/color-mode";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      Navbar
      <Button onClick={toggleColorMode}>Toggle Mode</Button>
    </HStack>
  );
};

export default NavBar;
