import { useState } from "react"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"


export default function LocationFilter({ locations = [], onChange }: { onChange?: (locations: string[]) => void; locations: string[] }) {
  const [selected, setSelected] = useState<string[]>([])

  const toggleLocation = (location: string) => {
    const isSelected = selected.includes(location)
    const updated = isSelected
      ? selected.filter(l => l !== location)
      : [...selected, location]
    setSelected(updated)
    onChange?.(updated)
  }

  return (
    <ScrollArea className="w-full whitespace-nowrap pb-5 pt-10 max-[744px]:py-5">
      <div className="flex gap-2">
        {locations.map(location => (
          <Button
            key={location}
            onClick={() => toggleLocation(location)}
            variant="outline"
            className={cn(
              "text-dark-gray rounded-full px-3 py-2 text-xl font-semibold transition-colors",
              selected.includes(location)
                ? "text-green border-green border-2 hover:text-green"
                : "border-[#E5E5E5]"
            )}
          >
            {location}
          </Button>
        ))}
      </div>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}