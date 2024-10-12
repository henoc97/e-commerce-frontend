import Footer from '../components/index.component/footer/footer';
import Main from '../components/index.component/sections/main';
import Header from '../components/index.component/header/header';

export default function Index() {
    return (
      <div className="flex flex-col min-h-screen bg-[#5B4B8A]">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }