import { AuthContext } from "@/context/authContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

const withPrivateRoute = (WrappedComponent) => {
  const PrivateRouteWrapper = (props) => {
    const router = useRouter();
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/login");
      }
    }, [user, loading, router]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };

  return PrivateRouteWrapper;
};

export default withPrivateRoute;
