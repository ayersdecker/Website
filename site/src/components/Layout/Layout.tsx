import Header from "./Header";
import Footer from "./Footer";
import '../../App.css';

export interface LayoutProps {
    children?: React.ReactNode;
  }

export default function Layout(props: LayoutProps): JSX.Element {
    return (
      <>
          <Header/>
            {props.children}
          <Footer/>
      </>
    );
  }