import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, BarChart, PieChart } from "lucide-react"

export default function InsightsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">サマリー</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <LineChart className="h-6 w-6" />
              <span>生産性トレンド</span>
            </CardTitle>
            <span className="text-sm">作成日: 2024/12/12</span>
          </CardHeader>
          <CardContent>
            <p>生産性トレンドサマリー</p>
            {/* ここに実際のチャートコンポーネントを追加 */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart className="h-6 w-6" />
              <p>プロジェクト進捗</p>
            </CardTitle>
            <span className="text-sm">作成日: 2024/12/25</span>
          </CardHeader>
          <CardContent>
            <p>プロジェクト進捗サマリー</p>
            {/* ここに実際のチャートコンポーネントを追加 */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-6 w-6" />
              <span>時間配分</span>
            </CardTitle>
            <span className="text-sm">作成日: 2024/12/31</span>
          </CardHeader>
          <CardContent>
            <p>異なるアクティビティに費やされた時間の割合</p>
            {/* ここに実際のチャートコンポーネントを追加 */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

