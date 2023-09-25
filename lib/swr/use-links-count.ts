import { useRouter } from "next/navigation";
import useSWR from "swr";
import { fetcher, getQueryString } from "@/lib/utils";

export default function useLinksCount({
  groupBy,
}: {
  groupBy?: "domain" | "tagId";
} = {}) {
  const router = useRouter();

  // const { data, error } = useSWR<any>(
  //   router &&
  //   `/api/links/_count${getQueryString(
  //     router,
  //     groupBy ? { groupBy } : undefined,
  //   )}`,
  //   fetcher,
  //   {
  //     dedupingInterval: 30000,
  //     keepPreviousData: true,
  //   },
  // );
  const data = {}
  const error = null

  return {
    data,
    loading: !error && !data,
    error,
  };
}
