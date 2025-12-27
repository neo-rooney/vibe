"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

const Client = () => {
  const trpc = useTRPC();
  const greeting = useSuspenseQuery(trpc.hello.queryOptions({ text: "world" }));

  return <div>{greeting.data?.greeting}</div>;
};

export default Client;
