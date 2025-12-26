import { prisma } from "@/lib/prisma";

const Page = async () => {
  const users = await prisma.user.findMany();
  return <pre className="text-sm">{JSON.stringify(users, null, 2)}</pre>;
};

export default Page;
