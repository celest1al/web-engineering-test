interface ILayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: ILayoutProps): JSX.Element {
  return <main className="min-h-screen px-8 py-5">{children}</main>
}
