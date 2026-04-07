import { useEffect, useState } from "react"
import { fetchUser } from "./fetch-users"
import UserItem from "./user"
import type { User } from "./user.type"

export default function Users() {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    fetchUser().then((data) => setUsers(data))
  }, [])
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}
