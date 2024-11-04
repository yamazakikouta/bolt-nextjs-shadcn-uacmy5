export default function IntroductionPage() {
  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold lg:text-5xl">Next.jsとは</h1>
        <p className="text-xl text-muted-foreground">
          Next.jsは、Reactベースのフルスタックフレームワークです。
          モダンなウェブアプリケーション開発に必要な機能が揃っています。
        </p>
      </div>
      <hr className="my-8" />
      <div className="prose prose-gray max-w-none dark:prose-invert">
        <h2>特徴と利点</h2>
        <p>
          Next.jsは、以下のような特徴を持つフレームワークです：
        </p>
        <ul>
          <li>
            <strong>ハイブリッドレンダリング</strong>
            <p>
              ページごとにSSR（サーバーサイドレンダリング）、
              SSG（静的サイト生成）、CSR（クライアントサイドレンダリング）を
              選択できます。
            </p>
          </li>
          <li>
            <strong>自動的なコード分割</strong>
            <p>
              ページ単位で自動的にコードが分割され、必要なJavaScriptのみを
              ロードすることで、初期表示を高速化します。
            </p>
          </li>
          <li>
            <strong>ファイルベースのルーティング</strong>
            <p>
              ページファイルを配置するだけで自動的にルーティングが設定され、
              直感的なアプリケーション構造を実現できます。
            </p>
          </li>
        </ul>

        <h2>なぜNext.jsを選ぶのか</h2>
        <p>
          Next.jsは、以下のような開発者にとって特に有用です：
        </p>
        <ul>
          <li>SEOを重視するプロジェクトを開発している方</li>
          <li>大規模なアプリケーションを構築する必要がある方</li>
          <li>パフォーマンスを重視するプロジェクトに携わっている方</li>
          <li>TypeScriptでの開発を予定している方</li>
        </ul>

        <h2>バージョン13の新機能</h2>
        <p>
          Next.js 13では、以下のような革新的な機能が追加されました：
        </p>
        <ul>
          <li>
            <strong>App Router</strong>
            <p>
              より柔軟なルーティング制御と、
              レイアウトの共有が可能になりました。
            </p>
          </li>
          <li>
            <strong>Server Components</strong>
            <p>
              デフォルトでサーバーコンポーネントをサポートし、
              パフォーマンスとSEOを向上させます。
            </p>
          </li>
          <li>
            <strong>Turbopack</strong>
            <p>
              Rustベースの新しいバンドラーにより、
              開発環境での高速なHMRを実現します。
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}