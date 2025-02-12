type LayoutProps = {
  children: React.ReactElement | React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}