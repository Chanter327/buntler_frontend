import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

type Message = {
  id: string
  sender: string
  content: string
  timestamp: string
}

type ChatAreaProps = {
  chatId: string
}

export default function ChatArea({}: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "AI", content: "こんにちは！何かお手伝いできることはありますか？", timestamp: "10:00 AM" },
    { id: "2", sender: "User", content: "はい、今日のスケジュールを教えてください。", timestamp: "10:01 AM" },
    {
      id: "3",
      sender: "AI",
      content:
        "承知しました。今日のスケジュールは以下の通りです：\n\n1. 9:00 AM - チームミーティング\n2. 11:00 AM - クライアントとの電話会議\n3. 2:00 PM - プロジェクトレビュー\n4. 4:00 PM - 週次レポート作成",
      timestamp: "10:02 AM",
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: Date.now().toString(),
        sender: "User",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMsg])
      setNewMessage("")
    }
  }

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "User" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex items-start space-x-2 max-w-[70%] ${message.sender === "User" ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              <Avatar>
                <AvatarImage src={message.sender === "AI" ? "/avatars/ai-assistant.jpg" : "/avatars/user.jpg"} />
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div className={`rounded-lg p-3 ${message.sender === "User" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                <p>{message.content}</p>
                <p className={`text-xs mt-1 ${message.sender === "User" ? "text-blue-100" : "text-gray-500"}`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
          className="flex space-x-2"
        >
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-grow"
          />
          <Button type="submit">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}

