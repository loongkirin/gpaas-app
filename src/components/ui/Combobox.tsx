import React from 'react'
import { Button } from '@/components/ui/Button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/Command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover'
import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ComboBoxItem {
  label: string,
  value: string,
}

interface ComboBoxProps {
  comboboxItems: ComboBoxItem[],
  selectedValue?: string,
  selectPlaceholder?: string,
  searchPlaceholder?: string,
}

const ComboBox = ({
  comboboxItems,
  selectedValue,
  selectPlaceholder,
  searchPlaceholder,
} : ComboBoxProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(selectedValue)
  const selectPlaceHolder = selectPlaceholder ?? "Select a item"
  const searchPlaceHolder = searchPlaceholder ?? "Search a item"
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? comboboxItems.find((item) => item.value === value)?.label
            : selectPlaceHolder}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceHolder} />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {comboboxItems.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { type ComboBoxProps, type ComboBoxItem, ComboBox }