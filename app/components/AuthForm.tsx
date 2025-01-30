"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AuthFormProps {
  isSignIn: boolean;
  onSubmit: (email: string, password: string) => void; // ここを追加
}
export default function AuthForm({ isSignIn }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここにサインイン/サインアップのロジックを実装します
    console.log(isSignIn ? "サインイン" : "サインアップ", { email, password })
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center">{isSignIn ? "サインイン" : "サインアップ"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="password">パスワード</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          {isSignIn ? "サインイン" : "サインアップ"}
        </Button>
      </form>
    </div>
  )
}

