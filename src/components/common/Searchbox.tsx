import { useRef, useState } from "react";
import { LuSearch, LuX } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import { Box, Icon, Input, InputGroup } from "@chakra-ui/react";

import useGameQueryStore from "../../store";

const Searchbox = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleClear = () => {
    if (ref.current) {
      ref.current.value = "";
      setHasValue(false);
      setSearchText("");
      navigate("/");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <Box className="search-container" flex="1">
        <InputGroup
          width="100%"
          startElement={
            <Box paddingLeft={4}>
              <Icon
                as={LuSearch}
                boxSize="18px"
                color={isFocused ? "purple.400" : "gray.400"}
                transition="color 0.2s"
              />
            </Box>
          }
          endElement={
            hasValue ? (
              <Box paddingRight={4}>
                <Icon
                  as={LuX}
                  boxSize="18px"
                  cursor="pointer"
                  onClick={handleClear}
                  _hover={{ color: "red.400" }}
                  transition="color 0.2s"
                />
              </Box>
            ) : undefined
          }
        >
          <Input
            ref={ref}
            paddingLeft="40px"
            paddingRight={hasValue ? "40px" : "16px"}
            height="44px"
            fontSize="0.95rem"
            placeholder="Search for games..."
            variant="subtle"
            borderRadius="2xl"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setHasValue(e.target.value.length > 0)}
          />
        </InputGroup>
      </Box>
    </form>
  );
};

export default Searchbox;
