import React, { FunctionComponent, lazy, Suspense } from "react";

import Book from "../Book";
import ReferencesPage from "../ReferencesPage";
import TitlePage from "../TitlePage";
import Page from "../Page";
import LightboxButton from "../LightboxButton";
import AgenticDiagram from "../agentic/AgenticDiagram";
import { ThumbnailNode } from "../../pages/index";
import StylomaTimeline from "../styloma/StylomaTimeline";

const StylomaArchitectureDiagram = lazy(() => import("../styloma/StylomaArchitectureDiagram.tsx"));
const StylomaAgenticLoopPage = lazy(() => import("../styloma/StylomaAgenticLoopPage.tsx"));

const SlidesStyloma: FunctionComponent<{ thumbnails: ThumbnailNode[] }> = ({ thumbnails }) => {

  return (
    <Book id="styloma" title="Styloma" thumbnails={thumbnails}>

      <TitlePage title="Styloma" subtitle="AI fashion search" lecture={7}>
        <p>
          What if you could search for clothes by showing what you mean, not by trivial filtering.
        </p>
        <p className="subtitle">Lead solo developer</p>
      </TitlePage>

      <Page title="Search fashion, visually">
        <div className="col-12">
          <div>
            <p>
              You want a dress just like that one; you visit Zara, filter by category and size. Then H&M, same filters. Then ASOS. Each site separately&hellip;
            </p>
            <h4>Visual semantic search</h4>
            <p>
              I built a dedicated search for exploring many stores at once - allowing you to find what you'd never discover by browsing page by page.
            </p>
          </div>
        </div>
        <div className="example-bar">
          <div className="col-3">
            <div>
              <h4 className="text-left">Image search</h4>
              <p className="text-left">Upload photo, iteratively explore similar items, until you find exactly what you're looking for!</p>
            </div>
            <div>
              <h4 className="text-left">Text search</h4>
              <p className="text-left">With natural language semantic understanding, you can give even more details.</p>
            </div>
            <div>
              <h4 className="text-left">URL search</h4>
              <p className="text-left">Paste product link → find it elsewhere, maybe even cheaper?</p>
            </div>
          </div>
          <div className="col-3" style={{marginBottom: '-360px'}}>
            <div>
              <LightboxButton path="styloma/homepage.png" alt="Homepage with a central search bar and recommendations underneath" />
            </div>
            <div>
              <LightboxButton path="styloma/search-results.png" alt="Search results view with grid of items matching the query" />
            </div>
            <div>
              <LightboxButton path="styloma/url-search.png" alt="Illustration of URL being copied into search and seeing alternate retatilers" />
            </div>
          </div>
        </div>
        <div className="grow"></div>
      </Page>

      <Page title="Event-driven microservices">
        <div>
          <p>
            I architected this as 15+ microservices on Google Cloud Platform. Services coordinate through Pub/Sub events - when a new item gets ingested, it triggers embedding generation, duplicate detection, and search indexing automatically.
          </p>
          <Suspense fallback={null}>
            <StylomaArchitectureDiagram />
          </Suspense>
        </div>
        <div>
          <h4>Data ingestion challenges</h4>
          <p>
            Retailers can expose different data formats - some provide APIs, feeds, others require scraping. I constructed a set of configurable parsers handling each source's specific access method and limitations.
          </p>
        </div>
      </Page>

      <Page title="Vector embeddings for similarity">
        <p>
          A picture is worth a thousand words? I think so, but a pixel match is not enough. We need to go further to understand for example the difference between a wrap dress and a shift dress, not just "blue dress.". Since beginning I knew that embeddings need to capture semantic meaning, not keywords.
        </p>
        <p></p>
        <div className="example">
          <div className="example-title">
            <h4>Embedding types</h4>
          </div>
          <div className="col-4">
            <div>
              <h5 className="text-left">Image embeddings</h5>
              <p className="text-left">Visual similarity - Individual photos encoded as vector - "find pictures that match this".</p>
            </div>
            <div>
              <h5 className="text-left">Item embeddings</h5>
              <p className="text-left">Semantic similarity - Items encoded as vectors of their properties - "find items that fit this description".</p>
            </div>
            <div>
              <h5 className="text-left">User embeddings</h5>
              <p className="text-left">User interest - Past interest encoded as vector - "prioritize items that I will like".</p>
            </div>
            <div>
              <h5 className="text-left">Hybrid search</h5>
              <p className="text-left">And now compine them all to get the individualized exact matches.</p>
            </div>
          </div>
          <div className="grow"></div>
          <LightboxButton className="page-overlay" path="styloma/embedding-space.png" alt="Visualization of embedding space" />
        </div>
      </Page>

      <Page title="Human (in the) loop" subtitle="The agentic development sub-system">
        <Suspense fallback={null}>
          <StylomaAgenticLoopPage />
        </Suspense>
      </Page>

      <Page title="References">
        
        <StylomaTimeline />
        
        <div className="text-right">
          <a className="btn-source" href="https://github.com/dee-gmiterko/eslint-formatter-actionable" target="_blank" rel="noreferrer">eslint-formatter-actionable ▷</a>
          <a className="btn-source" href="https://github.com/dee-gmiterko/eslint-plugin-defensive-coding" target="_blank" rel="noreferrer">eslint-plugin-defensive-coding ▷</a>
        </div>
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
  - services breakdown: user-facing, backend, infrastructure
  - main diagram illustrating scale
  - scraping complexity

3. Vector embeddings for similarity
  - deeper understanding
  - three embedding types: image, item, user / ML models for visual and semantic understanding
  - hybrid search: parallel queries + fusion
  - styloma timeline on bottom border

$ Conclusion $
- Technical showcase: microservices + ML + real product
- Bridges creative (UX problem) and engineering (distributed systems)

*/
