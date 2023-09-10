import { Routes, Route } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@/widgets/layout";
import { ForgotPassword, SignIn } from "@/pages/auth";
import { RegisterSiswa } from "@/widgets/layout/RegisterSiswa";
import { RegisterGuru } from "@/widgets/layout/RegisterGuru";
import { RegisterAdmin } from "@/widgets/layout/RegisterAdmin";

export function Auth() {
  const navbarRoutes = [
    {
      name: "dashboard",
      path: "/dashboard/home",
      icon: ChartPieIcon,
    },
    {
      name: "profile",
      path: "/dashboard/home",
      icon: UserIcon,
    },
    {
      name: "sign in",
      path: "/auth/sign-in",
      icon: ArrowRightOnRectangleIcon,
    },
  ];

  const auth = [
    {
      title: "auth pages",
      layout: "auth",
      pages: [
        {
          name: "sign in",
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          name: "sign up",
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          name: "register siswa",
          path: "/register/siswa",
          element: <RegisterSiswa />,
        },
        {
          name: "register guru",
          path: "/register/guru",
          element: <RegisterGuru />,
        },
        {
          name: "register admin",
          path: "/register/admin",
          element: <RegisterAdmin />,
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      <div className="container relative z-40 mx-auto p-4">
        <Navbar routes={navbarRoutes} />
      </div>
      <Routes>
        {auth.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
      <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <Footer />
      </div>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx";

export default Auth;
