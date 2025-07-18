import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { HStack, Icon, Image, Switch } from '@chakra-ui/react';

import logo from '../assets/logo.webp';
import Searchbox from './common/Searchbox';
import { useColorMode } from './ui/color-mode';

const NavBar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack paddingInline={4}>
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit={"contain"} />
      </Link>
      <Searchbox />
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
