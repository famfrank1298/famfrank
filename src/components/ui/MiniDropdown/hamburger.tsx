import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Hamburger() {
  return (
    <Select>
      <SelectTrigger>
        {/* <SelectValue placeholder="Select a fruit" /> */}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">About</SelectItem>
          <SelectItem value="banana">Skills</SelectItem>
          <SelectItem value="blueberry">Projects</SelectItem>
          <SelectItem value="grapes">Contact</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
