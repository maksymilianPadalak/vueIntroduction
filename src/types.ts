export type NavigationItem = {
  title: string
  url: string
  onKeyDown: (key: string, id: number) => void
  id: number
}

export type User = {
  id: string
  name: string
  username: string
  email: string
}
