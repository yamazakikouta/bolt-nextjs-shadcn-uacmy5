"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sidebarNav = [
  {
    title: "はじめに",
    items: [
      { title: "Next.jsとは", href: "/introduction" },
      { title: "インストール方法", href: "/getting-started" },
      { title: "プロジェクト構成", href: "/project-structure" },
    ],
  },
  {
    title: "基本概念",
    items: [
      { title: "ルーティング", href: "/routing" },
      { title: "ページとレイアウト", href: "/pages-and-layouts" },
      { title: "データフェッチング", href: "/data-fetching" },
      { title: "キャッシング", href: "/caching" },
      { title: "レンダリング", href: "/rendering" },
    ],
  },
  {
    title: "応用トピック",
    items: [
      { title: "認証と認可", href: "/auth" },
      { title: "状態管理", href: "/state-management" },
      { title: "最適化", href: "/optimization" },
      { title: "デプロイ", href: "/deployment" },
    ],
  },
  {
    title: "開発ガイド",
    items: [
      { title: "ベストプラクティス", href: "/best-practices" },
      { title: "エラーハンドリング", href: "/error-handling" },
      { title: "テスト", href: "/testing" },
      { title: "TypeScript", href: "/typescript" },
    ],
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden w-[240px] flex-col md:flex">
      <div className="w-full">
        <Accordion type="multiple" className="w-full">
          {sidebarNav.map((section, index) => (
            <AccordionItem value={section.title} key={index}>
              <AccordionTrigger className="text-sm">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                        pathname === item.href
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </nav>
  );
}