export interface NavItem {
  title: string
  href: string
  isHidden?: boolean
}

export interface MainNavProps {
  items: NavItem[]
}
