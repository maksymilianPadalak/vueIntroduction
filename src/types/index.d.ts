interface NavigationData {
  title: string
  url: string
}

// Make it available globally
declare global {
  type NavigationData = {
    title: string
    url: string
  }
}
