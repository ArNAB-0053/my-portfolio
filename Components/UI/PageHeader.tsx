"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Breadcrumb = {
    label: string
    href?: string
}

type PageHeaderProps = {
    breadcrumbs: Breadcrumb[]
}

const PageHeader = ({
    breadcrumbs,
}: PageHeaderProps): React.ReactElement => {
    const router = useRouter()

    return (
        <div className="flex items-center justify-between border-b border-white/[0.06] py-6">
            <button
                onClick={() => router.back()}
                className="group flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
            >
                <span className="text-base transition-transform duration-200 group-hover:-translate-x-1">
                    ←
                </span>
                Back
            </button>

            <nav className="text-xs text-white/25">
                {breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={breadcrumb.label}>
                        {index > 0 && " / "}

                        {breadcrumb.href ? (
                            <Link
                                href={breadcrumb.href}
                                className="transition-all duration-150 hover:text-white/45"
                            >
                                {breadcrumb.label}
                            </Link>
                        ) : (
                            <span className="text-white/45">
                                {breadcrumb.label}
                            </span>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </div>
    )
}

export default PageHeader