import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type ChatListProps = {
  type: "dm" | "group"
  onSelectChat: (chatId: string) => void
}

export default function ChatList({ type, onSelectChat }: ChatListProps) {
  const chats =
    type === "dm"
      ? [
          { id: "1", name: "田中さん", lastMessage: "了解しました。", avatar: "/avatars/tanaka.jpg" },
          { id: "2", name: "佐藤さん", lastMessage: "お疲れ様です。", avatar: "/avatars/sato.jpg" },
          { id: "3", name: "鈴木さん", lastMessage: "明日の予定について", avatar: "/avatars/suzuki.jpg" },
        ]
      : [
          { id: "4", name: "営業チーム", lastMessage: "今週の目標について", avatar: "/avatars/sales-team.jpg" },
          { id: "5", name: "開発チーム", lastMessage: "新機能のアップデート", avatar: "/avatars/dev-team.jpg" },
          {
            id: "6",
            name: "マーケティングチーム",
            lastMessage: "キャンペーンの進捗",
            avatar: "/avatars/marketing-team.jpg",
          },
        ]

  return (
    <div className="w-1/3 border-r overflow-y-auto">
      <ul className="space-y-2 p-4">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => onSelectChat(chat.id)}
          >
            <Avatar>
              <AvatarImage src={chat.avatar} alt={chat.name} />
              <AvatarFallback>{chat.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

