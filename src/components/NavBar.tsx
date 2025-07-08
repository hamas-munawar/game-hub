import { FaMoon, FaSun } from "react-icons/fa";

import { HStack, Icon, Image, Switch } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import { useColorMode } from "./ui/color-mode";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between" paddingInline={4}>
      <Image src={logo} boxSize="60px" />
      Navbar
      <Switch.Root colorPalette="blue" size="lg" onChange={toggleColorMode}>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
          <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
            <Icon as={FaSun} color="yellow.400" />
          </Switch.Indicator>
        </Switch.Control>
      </Switch.Root>
    </HStack>
  );
};

export default NavBar;
