import React, { lazy, Suspense } from "react"

const Diagram = lazy(() => import("./StylomaArchitectureDiagramSvg.tsx"));

const StylomaArchitectureDiagram = () => (
  <Suspense fallback={null}>
    <Diagram />
  </Suspense>
)

export default StylomaArchitectureDiagram
