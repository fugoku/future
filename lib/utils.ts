import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { NextRouter } from "next/router";

import { env } from "@/env.mjs"

interface SWRError extends Error {
  status: number;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}


export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const error = await res.text();
    const err = new Error(error) as SWRError;
    err.status = res.status;
    throw err;
  }

  return res.json();
}

export function linkConstructor({
  key,
  domain = "dub.sh",
  localhost,
  pretty,
  noDomain,
}: {
  key: string;
  domain?: string;
  localhost?: boolean;
  pretty?: boolean;
  noDomain?: boolean;
}) {
  const link = `${localhost ? "http://home.localhost:8888" : `https://${domain}`
    }${key !== "_root" ? `/${key}` : ""}`;

  if (noDomain) return `/${key}`;
  return pretty ? link.replace(/^https?:\/\//, "") : link;
}

export const getQueryString = (
  router: NextRouter,
  opts?: Record<string, string>,
) => {
  const queryString = new URLSearchParams({
    ...(router.query as Record<string, string>),
    ...opts,
  }).toString();
  return `${queryString ? "?" : ""}${queryString}`;
};
