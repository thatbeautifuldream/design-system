"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Settings, Check, Palette } from "lucide-react";
import { useTheme } from "next-themes";

const themes = [
    {
        name: "Default",
        value: "default",
        colors: [
            "hsl(var(--primary))",
            "hsl(var(--secondary))",
            "hsl(var(--accent))",
            "hsl(var(--border))",
        ],
    },
    {
        name: "Dark",
        value: "dark",
        colors: [
            "hsl(var(--primary))",
            "hsl(var(--secondary))",
            "hsl(var(--accent))",
            "hsl(var(--border))",
        ],
    },
    {
        name: "Catppuccin Latte",
        value: "catppuccin-latte",
        colors: [
            "#8839ef", // --primary
            "#dce0e8", // --secondary
            "#bcc0cc", // --accent
            "#bcc0cc", // --border
        ],
    },
    {
        name: "Catppuccin Frappe",
        value: "catppuccin-frappe",
        colors: [
            "#ca9ee6", // --primary
            "#414559", // --secondary
            "#626880", // --accent
            "#626880", // --border
        ],
    },
    {
        name: "Catppuccin Macchiato",
        value: "catppuccin-macchiato",
        colors: [
            "#c6a0f6", // --primary
            "#363a4f", // --secondary
            "#5b6078", // --accent
            "#5b6078", // --border
        ],
    },
    {
        name: "Catppuccin Mocha",
        value: "catppuccin-mocha",
        colors: [
            "#cba6f7", // --primary
            "#313244", // --secondary
            "#585b70", // --accent
            "#585b70", // --border
        ],
    },
];

export function ThemeDropdown() {
    const { theme, setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                    <Palette className="size-4" />
                    <span>Theme</span>
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {themes.map((themeOption) => (
                        <DropdownMenuItem
                            key={themeOption.value}
                            onClick={() => setTheme(themeOption.value)}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-2">
                                <span>{themeOption.name}</span>
                                <div className="flex">
                                    {themeOption.colors.map((color, index) => (
                                        <div
                                            key={index}
                                            style={{ backgroundColor: color }}
                                            className="size-4"
                                        />
                                    ))}
                                </div>
                            </div>
                            {theme === themeOption.value && <Check className="size-4" />}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
} 