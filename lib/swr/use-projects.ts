import useSWR from "swr";
import { ProjectWithDomainProps } from "@/lib/types";
import { fetcher } from "@/lib/utils";

export default function useProjects() {
  const { data: projects } = useSWR<ProjectWithDomainProps[]>(
    "/api/projects",
    fetcher,
    {
      dedupingInterval: 30000,
    },
  );

  return {
    // projects: projects?.map((project) => ({
    //   ...project,
    //   primaryDomain:
    //     project.domains.find((domain) => domain.primary) || project.domains[0],
    // })),
    id: "l",
    name:"teeth",
    plan:"pop",
    stripeId:"uiui",
    createdAt:"898i",
    error:{status: false},
    loading: false,
    projects: [
      {
        name: "ryi",
        slug: "yui",
        logo: "link",
        primaryDomain: {slug: "pp"}
      },
      {
        name: "goo",
        slug: "ooi",
        logo: "kok",
        primaryDomain: {slug: "pp"}
      }
    ]
  };
}

