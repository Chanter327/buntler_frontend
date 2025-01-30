import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InsightsPage() {
  const insights = [
    {
      id: 1,
      title: "生産性トレンド",
      date: "2024/12/12",
      summary: "生産性トレンドサマリー",
    },
    {
      id: 2,
      title: "プロジェクト進捗",
      date: "2024/12/25",
      summary: "プロジェクト進捗サマリー",
    },
    {
      id: 3,
      title: "時間配分",
      date: "2024/12/31",
      summary: "異なるアクティビティに費やされた時間の割合",
    },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">サマリー</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight) => {
          return (
            <Link
              key={insight.id}
              href={`/summary/${insight.id}`}
              className="block hover:shadow-lg transition-shadow duration-300"
            >
              <Card className="h-full cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <span>{insight.title}</span>
                  </CardTitle>
                  <span className="text-sm">作成日: {insight.date}</span>
                </CardHeader>
                <CardContent>
                  <p>{insight.summary}</p>
                  <Button variant="outline" className="mt-4 w-full">
                    詳細を見る
                  </Button>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

