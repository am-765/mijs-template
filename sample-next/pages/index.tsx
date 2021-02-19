import Head from 'next/head'
import Header from '../component/header';
import Main from '../component/main';
import Bicycle from '../component/bicycle';
export default function Home() {
  return (
    <div>
      <header>
        {/* Profile */}
      </header>
      <body>
        <Header />
        <Main />
        <Bicycle />
      </body>
      <footer id="footer">
        <p>&copy; 2020 Profile</p>
      </footer>
    </div>

  )
}
