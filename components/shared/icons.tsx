import {
  ArrowUpRight,
  FolderOpenDot,
  LucideProps,
  Menu,
  Moon,
  Send,
  SunMedium,
  type LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  menu: Menu,
  projects: (props: LucideProps) => <FolderOpenDot size={20} {...props} />,
  send: (props: LucideProps) => <Send size={20} {...props} />,
  external: (props: LucideProps) => <ArrowUpRight size={20} {...props} />,
  artstation: (props: LucideProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"
      />
    </svg>
  ),
}
