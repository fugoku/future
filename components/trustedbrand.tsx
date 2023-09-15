

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"


export function TrustedBrand() {
  return (
    <div className="bg-slate-50 dark:bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center  text-xl dark:text-white">Trusted by industry leaders at</h2>
        <div className="mt-8 flow-root lg:mt-10">
          <div className="-ml-8 -mt-4 flex flex-wrap justify-between lg:-ml-4">
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image
              className="h-12"
              width={60}
              height={40}
              src="https://assets.vercel.com/image/upload/front/home/new/logos/okta.svg 1x, https://assets.vercel.com/image/upload/front/home/new/logos/okta.svg 2x" alt="Tuple" />
            </div>
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image
              className="h-12"
              width={60}
              height={40}
              src="https://assets.vercel.com/image/upload/front/home/new/logos/zapier.svg 1x, https://assets.vercel.com/image/upload/front/home/new/logos/zapier.svg 2x" alt="Mirage" />
            </div>
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image
                className="h-12"
                width={60}
              height={40}
                src="https://assets.vercel.com/image/upload/front/home/new/logos/tailwindcss.svg 1x, https://assets.vercel.com/image/upload/front/home/new/logos/tailwindcss.svg 2x"
                alt="StaticKit"
              />
            </div>
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image
                className="h-12"
                width={60}
              height={40}
                src="https://assets.vercel.com/image/upload/front/home/new/logos/hashicorp.svg 1x, https://assets.vercel.com/image/upload/front/home/new/logos/hashicorp.svg 2x"
                alt="Transistor"
              />
            </div>
            <div className="ml-8 mt-4 flex shrink-0 grow lg:ml-4 lg:grow-0">
              <Image
                className="h-12"
                width={60}
              height={40}
                src="https://assets.vercel.com/image/upload/front/home/new/logos/washingtonpost.svg 1x, https://assets.vercel.com/image/upload/front/home/new/logos/washingtonpost.svg 2x"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



