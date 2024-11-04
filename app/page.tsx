import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Code, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container relative">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-8 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Next.js完全解説ガイド
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Next.jsの基礎から実践まで、日本語で分かりやすく解説。
          現場で使える実践的な知識を、エンジニアの視点でお届けします。
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/introduction">
              はじめる
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/getting-started">
              クイックスタート
              <Rocket className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-8 py-16 md:grid-cols-3">
        <Card className="p-6">
          <BookOpen className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">分かりやすい解説</h3>
          <p className="text-muted-foreground">
            初心者から上級者まで、段階的に理解を深められる構成で解説します。
          </p>
        </Card>
        <Card className="p-6">
          <Code className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">実践的なコード例</h3>
          <p className="text-muted-foreground">
            実際の開発現場で使える、具体的なコード例と実装パターンを紹介します。
          </p>
        </Card>
        <Card className="p-6">
          <Rocket className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">最新情報</h3>
          <p className="text-muted-foreground">
            Next.jsの最新機能や、ベストプラクティスを常にアップデートしています。
          </p>
        </Card>
      </div>
    </div>
  );
}