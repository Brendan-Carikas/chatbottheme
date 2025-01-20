import { Palette } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/themes';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 left-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
          >
            <Palette className="h-4 w-4" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {Object.entries(themes).map(([themeName, themeData]) => (
            <DropdownMenuItem
              key={themeName}
              onClick={() => setTheme(themeName as keyof typeof themes)}
              className={cn(
                "capitalize",
                theme === themeName && "bg-primary/10"
              )}
            >
              {themeData.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
