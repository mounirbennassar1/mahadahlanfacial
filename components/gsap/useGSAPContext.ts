"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely on the client
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * A Next.js App Router safe wrapper for gsap.context()
 * Automatically cleans up all ScrollTriggers and Tweens associated 
 * securely when the component unmounts.
 */
export function useGSAPContext(
    callback: (context: gsap.Context) => void,
    dependencies: React.DependencyList = []
) {
    useLayoutEffect(() => {
        // We defer execution slightly inside useLayoutEffect to ensure DOM paints
        const ctx = gsap.context(() => {
            callback(gsap.context(() => { }));
        });

        return () => {
            ctx.revert(); // Reverts timelines and cleans up ScrollTriggers
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}
