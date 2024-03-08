import { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TopUsers from "@/components/Sections/Home/TopUsers";
import TopProducts from "@/components/Sections/Home/TopProducts";

export const metadata: Metadata = {
  title: "IncuDemo App",
  description:
    "Example demo app using the shadcn components, tanstack query and dummyjson.",
};

export default function DemoPage() {
  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="users" className="h-screen space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="users" className="relative">
              Top Users
            </TabsTrigger>
            <TabsTrigger value="products">Top Products</TabsTrigger>
            <TabsTrigger value="delete" disabled>
              Delete production
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="users" className="border-none p-0 outline-none">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                See the top users
              </h2>
              <p className="text-sm text-muted-foreground">
                The most active users on the platform.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <TopUsers />
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent
          value="products"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Top Products
              </h2>
              <p className="text-sm text-muted-foreground">
                The most listened to products.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <TopProducts />
            </ScrollArea>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
