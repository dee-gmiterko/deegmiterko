import React, { FunctionComponent } from "react";

import Book from "../Book";
import ReferencesPage from "../ReferencesPage";
import TagList from "../TagList";
import Timeline from "../Timeline";
import TitlePage from "../TitlePage";
import Page from "../Page";
import LightboxButton from "../LightboxButton";
import AgenticDiagram from "../agentic/AgenticDiagram";
import { ThumbnailNode } from "../../pages/index";

const SlidesStyloma: FunctionComponent<{ thumbnails: ThumbnailNode[] }> = ({ thumbnails }) => {

  return (
    <Book id="styloma" title="Styloma" thumbnails={thumbnails}>

      <TitlePage title="Styloma" subtitle="AI fashion search" lecture={7}>
        <p>
          What if you could search for clothes by showing what you mean, not by trivial filtering.
        </p>
        <p className="subtitle">Lead solo developer</p>
      </TitlePage>

      <Page title="Search fashion visually">
        <div className="col-12">
          <div>
            <p>
              You want a dress like that one. Normally, you'd visit Zara, filter by category and size. Then H&M, same filters. Then ASOS. Each site separately&hellip;
            </p>
            <h4>Visual semantic search</h4>
            <p>
              I built a dedicated search for exploring many stores at once - allowing you to find what you'd never discover by browsing page by page.
            </p>
          </div>
        </div>
        <div className="example-bar">
          <div>
            <ul>
              <li><strong>Image search</strong>: Upload photo → find similar items</li>
              <li><strong>Text search</strong>: Natural language semantic understanding</li>
              <li><strong>URL search</strong>: Paste product link → find it elsewhere</li>
            </ul>
          </div>
          <div className="col-3">
            <div>
              <LightboxButton path="styloma/homepage.png" alt="Homepage with recommendations" />
            </div>
            <div>
              <LightboxButton path="styloma/search-results.png" alt="Search results" />
            </div>
            <div>
              <LightboxButton path="styloma/user-profile.png" alt="User profile with notifications" />
            </div>
          </div>
        </div>
      </Page>

      <Page title="Event-driven microservices">
        <div>
          <p>
            I architected this as 15+ microservices on Google Cloud Platform. Services coordinate through Pub/Sub events - when a new item gets ingested, it triggers embedding generation, duplicate detection, and search indexing automatically.
          </p>
          <TagList tags={["TypeScript", "Node.js", "React", "PostgreSQL", "pgvector", "Google Cloud Platform", "Pub/Sub", "Redis", "Docker", "Terraform", "TypeORM", "InversifyJS"]} />
          <div className="example-bar-w-image">
            <LightboxButton path="styloma/architecture-diagram.png" alt="Styloma architecture diagram" />
          </div>
        </div>
        <div className="grow"></div>
        <div>
          <h3>Data ingestion challenges</h3>
          <p>
            Retailers have different data formats - some provide APIs, others require scraping. Built configurable parsers handling each source's specific access method and rate limits.
          </p>
        </div>
      </Page>

      <Page title="Vector embeddings for similarity">
        <p>
          I built the embedding system to understand fashion semantically, not just match pixels. Fine-tuned CLIP on fashion datasets so it distinguishes between a wrap dress and a shift dress, not just "blue dress." Text embeddings capture semantic meaning - "vintage floral midi" understood as a concept, not keywords. Together, they enable search that combines visual similarity with semantic understanding.
        </p>
        <div className="example-bar-w-image">
          <div className="example-title">
            <h4>Two embedding types</h4>
          </div>
          <ul>
            <li>
              <strong>Image embeddings</strong> - Visual similarity
              <p className="mb-1">Product photos encoded with CLIP. Matching by color, style, pattern - "find items that look like this."</p>
            </li>
            <li>
              <strong>Item embeddings</strong> - Semantic similarity
              <p className="mb-1">Text descriptions as vectors. Understanding "long sleeve blue silk blouse with bow" not as keywords but as meaning.</p>
            </li>
          </ul>
          <LightboxButton path="styloma/embedding-space.png" alt="Visualization of embedding space" />
        </div>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>PostgreSQL pgvector at scale</h4>
          </div>
          <p>
            All similarity search happens in PostgreSQL using the pgvector extension for vector similarity queries.
          </p>
          <p>
            Hybrid searches run image and text embeddings in parallel, then fuse results. A dress photo plus "but in red" - both visual and semantic matching working together.
          </p>
          <p className="text-center">
            <LightboxButton path="styloma/search-results.png" alt="Search results showing similarity matches" buttonClassName="w-50" />
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <Timeline />
        </div>
      </Page>

      <Page title="Agentic development sub-system">
        <AgenticDiagram />
      </Page>

      <ReferencesPage references={["github"]} />

    </Book>
  )
}

export default SlidesStyloma;

/*

$ Story $
- Progression: Problem → Architecture → Innovation
  - visual search is hard for fashion
  - distributed system design
  - ML/AI embeddings at scale

#my role: system architect, ML integration

$ Pages $
1. Search fashion visually
  - problem statement: text search fails for visual products
  - solution: image upload, hybrid search, URL search
  - UX: multi-item detection in photos

2. Event-driven microservices
  - GCP architecture with 15+ services
  - services breakdown: user-facing, backend, infrastructure
  - async communication via Pub/Sub event bus
  - item lifecycle orchestration

3. Vector embeddings for similarity
  - three embedding types: image, item, user
  - ML models for visual and semantic understanding
  - pgvector for sub-200ms similarity search
  - hybrid search: parallel queries + fusion

$ Future additions $
- screenshots/mockups of UI
- architecture diagram visual
- embedding space visualization
- performance metrics/graphs

$ Conclusion $
- Technical showcase: microservices + ML + real product
- Bridges creative (UX problem) and engineering (distributed systems)

*/
