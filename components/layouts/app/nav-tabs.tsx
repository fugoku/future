import { ModalContext } from "@/components/ui/modal-provider";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useContext, useMemo } from "react";
import useDomains from "@/lib/swr/use-domains";
import useLinksCount from "@/lib/swr/use-links-count";
import useUsers from "@/lib/swr/use-users";
import { Badge } from "@/components/ui/badge2";
// import { Badge } from "@/components/app/projects/plan-badge2";

import useProject from "@/lib/swr/use-projects";

const TabsHelper = (router: any): { name: string; href: string }[] => {
  // const { slug, domain, key } = router.query as {
  //   slug?: string;
  //   domain?: string;
  //   key?: string;
  // };

  // const searchParams = useSearchParams()
  // const slug = searchParams?.get("slug")
  // const domain = searchParams?.get("domain")
  // const key = searchParams?.get("key")

  // if (key) {
  //   // link stats page (e.g. app.dub.co/steven/stey.me/devrel, app.dub.co/links/github)
  //   return [{ name: "← All Links", href: `/${slug || "links"}` }];
  // } else if (domain) {
  //   // root domain stats page (e.g. app.dub.co/steven/stey.me)
  //   return [{ name: "← All Domains", href: `/${slug}/domains` }];
  //   // project pages (e.g. app.dub.co/steven, app.dub.co/steven/settings)
  // } else if (slug) {
  //   return [
  //     { name: "Links", href: `/${slug}` },
  //     { name: "Domains", href: `/${slug}/domains` },
  //     { name: "Settings", href: `/${slug}/settings` },
  //   ];
  // }
  // home page (e.g. app.dub.co, app.dub.co/settings)
  return [
    { name: "Projects", href: `/` },
    { name: "Containers", href: `/containers` },
    { name: "Settings", href: `/settings` },
  ];
};

export default function NavTabs() {
  const router = useRouter();
  const query = useSearchParams()
  const pathname = usePathname()
  const slug = query && query.get("slug")

  // let slug = "v"
  let error = ""
  // const { slug } = router.query as { slug?: string };
  const tabs = useMemo(() => {
    if (!router) {
      return [];
    } else {
      return TabsHelper(router);
    }
  }, [router]);

  const { verified, loading } = useDomains();
  const { data: count } = useLinksCount();

  // const { error, loading: projectLoading } = useProject();

  // if (!router.isReady || projectLoading) {
  //   return <div className="-mb-0.5 h-12 w-full" />;
  // }

  // if (!error) {
  return (
    <div className="scrollbar-hide -mb-0.5 flex h-12 items-center justify-start space-x-2 overflow-x-auto">
      {tabs.map(({ name, href }) => (
        <Link
          key={href}
          href={href}
        // className={`border-b-2 p-1 ${
        //   // hacky approach to getting the current tab – will replace with useSelectedLayoutSegments when upgrading to Next.js 13
        //   router.asPath.split("?")[0].split("/").slice(0, 3).join("/") ===
        //   href
        //     ? "border-black text-black"
        //     : "border-transparent text-gray-600 hover:text-black"
        // }`}
        >
          <div className="rounded-md px-3 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
            <p className="text-sm">{name}</p>
          </div>
        </Link>
      ))}
      {slug && !loading && (!verified || count === 0) && (
        <OnboardingChecklist />
      )}
    </div>
  );
  // }
}

const OnboardingChecklist = () => {
  const { setShowCompleteSetupModal } = useContext(ModalContext);
  const { verified } = useDomains();
  const { data: count } = useLinksCount();
  const { users } = useUsers();
  const { users: invites } = useUsers({ invites: true });

  const remainder = useMemo(() => {
    return (
      (verified ? 0 : 1) +
      (count > 0 ? 0 : 1) +
      ((users && users.length > 1) || (invites && invites.length > 0) ? 0 : 1)
    );
  }, [count, invites, users, verified]);

  return (
    <button
      onClick={() => setShowCompleteSetupModal(true)}
      className="flex items-center space-x-2 rounded-md border-b-2 border-transparent p-1 px-3 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
    >
      <p className="whitespace-nowrap text-sm text-gray-600">
        Onboarding Checklist
      </p>
      <Badge text={remainder.toString()} variant="blue" />
    </button>
  );
};
