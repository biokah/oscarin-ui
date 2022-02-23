
import { Header } from "./header/Header";



export const Layout = ({ children }) => (
  <>
    <Header />
    <main className="main h-full w-full flex flex-col items-center justify-center">
      {children}
    </main>
  </>
);