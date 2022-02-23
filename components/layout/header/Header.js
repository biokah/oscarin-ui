import Image from 'next/image'
import logo from './../../../assets/images/Oscarin_Logo.png'
import send from './../../../assets/images/send.png'
import Link from 'next/link'

export const Header = () => {

    return (
      <header className="c_header absolute bg-white top-0 left-0 right-0 flex items-center justify-between">
        <section className="flex">
          <Link href="/" className="logo" >
            <Image
              src={logo}
              alt="logo"
             
            />
          </Link>
          <nav className="nav">
            <ul className="flex">
              <li className="active rounded-lg" >
                <Link href="/">Mi quiniela</Link>
              </li>
              <li>
                <Link href="/ranking">Ranking</Link>
              </li>
              <li>
                <Link href="/rules">Reglas</Link>
              </li>
              
            </ul>
          </nav>
        </section>
        <section className="flex">
          <article className="flex share">
            <Image
              src={send}
              alt="send"
            >
              
            </Image>
            <span>Compartir</span>
          </article>
          <article className="user">
            <span>@User</span>
          </article>
        </section>
      </header>
    );
  };