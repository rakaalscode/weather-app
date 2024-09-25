import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Search = ({
  onChangeSubmit,
}: {
  onChangeSubmit: (value: string) => void;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChangeSubmit(searchValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full space-x-2"
    >
      <Input
        type="text"
        placeholder="Search city..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button
        type="submit"
        disabled={!searchValue || searchValue.trim() === ""}
      >
        Search
      </Button>
    </form>
  );
};
