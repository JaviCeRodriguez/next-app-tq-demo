import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/models/Users";
import Link from "next/link";

const UserCard = ({ user }: { user: User }) => {
  return (
    <Link href={`/users/${user.id}`}>
      <Card>
        <CardHeader className="p-4">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src={user.image} alt={user.username} />
          </Avatar>
        </CardHeader>
        <CardContent className="p-4 grid gap-2">
          <p className="text-sm font-medium">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {user.company.title}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default UserCard;
