import UserDetails from "@/components/Sections/User/Details";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IncuDemo App",
  description:
    "Example demo app using the shadcn components, tanstack query and dummyjson.",
};

export default function UserPage({ params }: { params: { id: number } }) {
  return (
    <div className="flex flex-col gap-4 h-full px-4 py-6 lg:px-8">
      <Link href="/">
        <Button>Back</Button>
      </Link>
      <UserDetails id={params.id} />
    </div>
  );
}
