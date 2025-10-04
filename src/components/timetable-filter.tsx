"use client";

import type { FC } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TimetableFilterProps {
  items: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  placeholder: string;
}

const TimetableFilter: FC<TimetableFilterProps> = ({ items, selectedValue, onValueChange, placeholder }) => {
  return (
    <Select value={selectedValue} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px] md:w-[240px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map(item => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TimetableFilter;
