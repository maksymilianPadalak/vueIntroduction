export type NavigationItem = {
  title: string
  url: string
  onKeyDown: (key: string, id: number) => void
  id: number
}
