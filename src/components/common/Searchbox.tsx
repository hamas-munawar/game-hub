import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

import { Input, InputGroup } from "@chakra-ui/react";

interface Props {
  onSearch: (searchQuery: string) => void;
}

const Searchbox = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(ref.current?.value || "");
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
