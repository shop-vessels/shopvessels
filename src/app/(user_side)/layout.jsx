import Navbar from "@/components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import connectDB from "@/database/connectDatabase";

export default async function RootLayout({ children }) {
  await connectDB();
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
