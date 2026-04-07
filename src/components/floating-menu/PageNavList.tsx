"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  LayoutDashboard,
  UserCircle,
  BotMessageSquare,
} from "lucide-react";
import { getPageList } from "./menu-config";

const iconMap: Record<string, React.ReactNode> = {
  "/": <Home className="w-4 h-4" />,
  "/match-table": <LayoutDashboard className="w-4 h-4" />,
  "/match-table/taste-profile": <UserCircle className="w-4 h-4" />,
  "/ai-chat": <BotMessageSquare className="w-4 h-4" />,
};

export default function PageNavList({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const pages = getPageList(pathname);

  const handleClick = (path: string) => {
    router.push(path);
    onNavigate?.();
  };

  return (
    <div className="flex flex-col gap-1 p-2">
      {pages.map((page) => {
        const isCurrent = pathname === page.path;
        return (
          <button
            key={page.path}
            onClick={() => handleClick(page.path)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
              isCurrent
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <span
              className={`flex-shrink-0 ${isCurrent ? "text-blue-600" : "text-gray-400"}`}
            >
              {iconMap[page.path] ?? <LayoutDashboard className="w-4 h-4" />}
            </span>
            <div className="min-w-0">
              <div className="text-sm font-medium truncate">{page.label}</div>
              {page.description && (
                <div
                  className={`text-xs truncate ${isCurrent ? "text-blue-500" : "text-gray-400"}`}
                >
                  {page.description}
                </div>
              )}
            </div>
            {isCurrent && (
              <span className="ml-auto text-[10px] text-blue-500 font-medium flex-shrink-0">
                현재
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
