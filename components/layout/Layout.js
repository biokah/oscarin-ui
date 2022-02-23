
import { Header } from "./header/Header";



export const Layout = ({ children }) => (
  <>
    <Header />
    <main className="h-full w-full bg-white py-16 px-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 self-center">
        OSCARIN
      </h1>
      {children}
    </main>
  </>
);