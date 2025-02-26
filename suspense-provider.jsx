"use client"

import { Suspense } from "react"

export default function Provider({ children }) {
    return (
        <Suspense>
            {children}
        </Suspense>
    )
}