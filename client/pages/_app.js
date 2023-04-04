import AuthProvider from "@/context/authContext";
import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="bg-secondary">
        <Layout>
          <Component {...pageProps} />
          <Toaster position="top-center" reverseOrder={false} />
        </Layout>
      </div>
    </AuthProvider>
  );
}
