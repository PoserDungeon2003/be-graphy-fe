import { Footer, Header } from "../components";

type LayoutProps = {
  children: React.ReactElement | React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
};
