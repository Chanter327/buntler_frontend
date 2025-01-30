import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, BarChart, PieChart } from "lucide-react"
import Link from "next/link"
import type React from "react" // Import React

type insightId = number

const insightData: Record<insightId, { title: string; icon: React.ElementType; description: string }> = {
  1: {
    title: "生産性トレンド",
    icon: LineChart,
    description: "過去30日間の生産性スコアの推移を表示します。",
  },
  2: {
    title: "プロジェクト進捗",
    icon: BarChart,
    description: "プロジェクトの進捗状況と完了率",
  },
  3: {
    title: "時間配分",
    icon: PieChart,
    description: "異なるアクティビティに費やされた時間の割合",
  },
}

export default function InsightDetailPage({ params }: { params: { id: number } }) {
  const insight = insightData[params.id]

  return (
    <div className="container mx-auto p-4">
      <Link href="/summary">
        <Button variant="ghost" className="mb-4">
          ← 戻る
        </Button>
      </Link>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-3xl">
            <span>{insight.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{insight.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

