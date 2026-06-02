import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
