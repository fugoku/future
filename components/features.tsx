"use client"

import * as React from "react"
import Lottie from 'react-lottie';
import Ad1 from '@/assets/lotties/animationB.json';

import Ad2 from '@/assets/lotties/animation_D.json';

import Ad3 from '@/assets/lotties/animation_D.json';
import Ad4 from '@/assets/lotties/animation_D.json';
import Ad5 from '@/assets/lotties/animation_D.json';



import { UserSubscriptionPlan } from "types"
import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface FeatureProps extends React.HTMLAttributes<HTMLFormElement> {
  // subscriptionPlan: UserSubscriptionPlan & {
  //   isCanceled: boolean
  // }
}

export function Feature({ className, ...props }: FeatureProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const data = {
    title: "Features",
    subtext: "Host all your Applications and Services in one place",
    subtext2:
      "Fugoku also includes a blog and a full-featured documentation site built using Contentlayer and MDX.",
    services: [
      {
        title: "Web Services",
        description: "Next.js 13 Django & Flask Rails & Express GraphQL & REST",
        animate: Ad1
      },
      {
        title: "Static Sites",
        description: "React 18, Create React App, Gatsby, Hugo",
        animate: Ad2

      },
      {
        title: "Database",
        description:
          "PostgreSQL Fully managed databases with automated backups. Redis® Fully managed in-memory storage with live metrics.",
        animate: Ad3

      },
      {
        title: "Containers",
        description:
          "Dockerfiles, Docker Compose Host virtually anything with custom Dockerfiles.",
        animate: Ad4

      },
      { title: "Climate Friendly", description: "Green Serversss" },
      {
        title: "Subscriptions",
        description: "Free and paid subscriptions using Stripe.",
        animate: Ad5
      },
    ],
  }

  // async function onSubmit(event) {
  //   event.preventDefault()
  //   setIsLoading(!isLoading)

  //   // Get a Stripe session URL.
  //   const response = await fetch("/api/users/stripe")

  //   if (!response?.ok) {
  //     return toast({
  //       title: "Something went wrong.",
  //       description: "Please refresh the page and try again.",
  //       variant: "destructive",
  //     })
  //   }

  //   // Redirect to the Stripe session.
  //   // This could be a checkout page for initial upgrade.
  //   // Or portal to manage existing subscription.
  //   const session = await response.json()
  //   if (session) {
  //     window.location.href = session.url
  //   }
  // }

  return (
    <section
      id="features"
      className="container space-y-6 border-2 border-red-500 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          {data.title}
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {data.subtext}
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {data.services.map((service, index) => {
          return (
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: service.animate,
                  rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }}}
                height={400}
                width={400}
              />
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                  <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                </svg>
                <div className="space-y-2">
                  <h3 className="font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {data.subtext2}
        </p>
      </div>
    </section>
  )
}
