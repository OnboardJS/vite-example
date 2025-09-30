import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import {
  BoxIcon,
  ReplaceIcon,
  UserRoundPenIcon,
  UserStarIcon,
} from "lucide-react";

type CommandMenuProps = {
  workspace?: string;
  onOpenChange?: (open: boolean) => void;
};

export function CommandMenu({ workspace, onOpenChange }: CommandMenuProps) {
  // The first three letters of the workspace, or "WS" if not provided
  const workspacePre = workspace?.substring(0, 3).toUpperCase() || "WS";
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    onOpenChange?.(isOpen);
  };

  return (
    <CommandDialog open={open} onOpenChange={handleOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Issues">
          <CommandItem accessKey="A" onSelect={() => handleOpenChange(false)}>
            <UserRoundPenIcon /> Assign to...
          </CommandItem>
          <CommandItem accessKey="I" onSelect={() => handleOpenChange(false)}>
            <UserStarIcon /> Assign to me
          </CommandItem>
          <CommandItem accessKey="C" onSelect={() => handleOpenChange(false)}>
            <ReplaceIcon /> Change status...
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Projects">
          <CommandItem accessKey={"P"} onSelect={() => handleOpenChange(false)}>
            <BoxIcon /> Create new project...
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
