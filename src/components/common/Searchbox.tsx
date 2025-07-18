import { useRef } from "react";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import { Input, InputGroup } from "@chakra-ui/react";

import useGameQueryStore from "../../store";

const Searchbox = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

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
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          placeholder="Search Games"
          variant={"subtle"}
          borderRadius="lg"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default Searchbox;
