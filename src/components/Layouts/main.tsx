"use client";

import { useRouter } from "next/navigation";

const ClientMainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // check if the email is already in local storage
  const router = useRouter();

  if (typeof window !== "undefined") {
    const email = localStorage.getItem("email");
    if (!email) {
      router.push("/auth/login");
    }
  }

  return <>{children}</>;
};

export default ClientMainLayout;
