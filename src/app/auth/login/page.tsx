import { Metadata } from "next";
import { UserLogin } from "@/components/Forms/Login";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return <UserLogin />;
}
