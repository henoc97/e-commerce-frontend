import { Poppins } from 'next/font/google';
import Modal from "../components/modal";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Index() {
  return (
    <div className={poppins.className}>
      <Modal />
    </div>
  );
};

