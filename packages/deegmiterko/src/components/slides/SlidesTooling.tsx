import React, { FunctionComponent, lazy, Suspense } from "react";

import Book from "../Book";
import Page from "../Page";
import SourceCodeLink from "../SourceCodeLink";
import ReferencesPage from "../ReferencesPage";
import TitlePage from "../TitlePage";
import LightboxButton from "../LightboxButton";
import { Slide, ThumbnailNode } from "../../types";
import ToolingTitle from "../tooling/ToolingTitle";

const FileConvertersDiagram = lazy(
  () => import("../tooling/FileConvertersDiagram"),
);

const SlidesTooling: FunctionComponent<{ thumbnails: ThumbnailNode[] }> = ({
  thumbnails,
}) => {
  return (
    <Book bookId={Slide.Tooling} thumbnails={thumbnails}>
      <TitlePage
        title="Tooling"
        titleNode={<ToolingTitle />}
        lecture={8}
      >
        <p>
          I really enjoy developing tooling to improve processes. The goal is
          to automate and give a better experience to someone:
        </p>
        <ul>
          <li>
            <span className="subheading">DevX</span> - development experience,
            tools that prevent issues
          </li>
          <li>
            <span className="subheading">ProdX</span> - production pipeline
            experience
          </li>
          <li>
            <span className="subheading">DataX</span> - data input experience
          </li>
        </ul>
      </TitlePage>

      <Page
        title="Reviewing at scale"
        skills={[
          "DevX",
          "GitHub API",
          "Code review",
          "Tooling",
          "Electron",
          "TypeScript",
          "React",
          "CodeMirror",
          "LSP",
          "Zustand",
          "TanStack",
          "Vitest",
        ]}
      >
        <p>
          Agents produce changes faster than anyone can read them. And review
          is the one step of the loop that can't be delegated, so it has to be
          done properly, not skimmed. A pull request of a few thousand lines
          in a web diff, with no way to jump to a definition, is exactly where
          that goes wrong. So I review in the real repository instead.
        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Gepard (2026)</h4>
            <SourceCodeLink href="https://github.com/dee-gmiterko/gepard" target="_blank" rel="noreferrer" />
          </div>
          <p>
            A desktop app for reviewing large pull requests in a full local
            clone. The whole repository is searchable, language servers give
            definitions and references, and the review scope is a target - a
            pull request, one of its commits, or a path. Files are walked from
            the keyboard and marked viewed as you go; comments are drafted
            locally and pushed to GitHub as a single review in one sync. Open
            source.
          </p>
          <p className="text-center">
            <LightboxButton
              path="gepard/screenshot.png"
              alt="Gepard reviewing a pull request: file tree with viewed marks, diff view, floating viewed and sync controls, file details panel"
              buttonClassName="w-80"
            />
          </p>
        </div>
      </Page>

      <Page
        title="Development server"
        skills={[
          "DevX",
          "Tooling",
          "MCP",
          "Docker",
          "Express",
          "TypeScript",
          "React",
          "Vite",
        ]}
      >
        <p>
          Imagine a single control room that starts, builds and checks every
          part of the product's local environment, so developers stop juggling
          terminals and exchange personal knowledge for an environment that knows
          how to run each service for you (regardless of developer being a human
          or an AI agent).
        </p>
        <p>
          This allows for independent development withot having to share all knowledge
          about the system, and any systemic changes are made into the environment itself.
        </p>
        <div className="grow" />
        <div className="example example-half-image">
          <LightboxButton
            path="dev-server.png"
            alt="Development server control room showing the local environment's services, builds and tasks"
            buttonClassName="example-image"
          />
          <div className="example-content">
            <div className="example-title">
              <h4>Styloma dev server (2025)</h4>
            </div>
            <ul>
              <li>Whole environment starts in the right order</li>
              <li>Changes trigger rebuilds automatically</li>
              <li>One screen for every task</li>
              <li>One-click restart and rerun</li>
              <li>MCP access for agents</li>
              <li>Remote access to agent sessions in progress</li>
            </ul>
          </div>
        </div>
      </Page>

      <Page
        title="Validation"
        skills={[
          "DevX",
          "Validation",
          "ESLint",
          "Static analysis",
          "JavaScript",
          "TypeScript",
          "Node.js",
          "Agentic development",
        ]}
      >
        <p>
          Validation decides whether a change is good enough to go in, so I
          like to enforce it strictly - as long as it says exactly what to fix.
        </p>
        <div className="grow" />
        <div className="example-bar">
          <div className="example-title">
            <h4>Actionable formatter (2026)</h4>
            <SourceCodeLink
              href="https://github.com/dee-gmiterko/eslint-formatter-actionable"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <p>
            Originally built for agentic work, it allows guided action instead
            of blind linter following.
          </p>
          <ul>
            <li>
              Better display of current line contents and recommended full line
              replacement given by plugins
            </li>
            <li>
              Define message overrides to allow for approach recommendation
            </li>
          </ul>
        </div>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Defensive coding plugin (2026)</h4>
            <SourceCodeLink
              href="https://github.com/dee-gmiterko/eslint-plugin-defensive-coding"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <p>
            Plugin detects defensive coding anti-patterns and helps enforce
            practices in which I believe to improve code readability and
            maintainability.
          </p>
          <ul className="two-columns">
            <li>no-empty-fallback</li>
            <li>no-re-exports</li>
            <li>no-dynamic-import</li>
            <li>no-emojis-in-script</li>
            <li>no-emojis-in-component</li>
            <li>...and many more...</li>
          </ul>
        </div>
      </Page>

      <Page
        title="Deployment and CI/CD"
        skills={[
          "DevX",
          "CI/CD",
          "Docker",
          "Yarn",
          "Yarn plugins",
          "TypeScript",
          "Vitest",
          "C++",
          "CMake",
          "clang-tidy",
          "Caching",
        ]}
      >
        <p>
          Every step of a deployment I can automate is one less thing somebody
          has to do by hand.
        </p>
        <div className="grow" />
        <div className="example-bar">
          <div className="example-title">
            <h4>Production lockfiles (2026)</h4>
            <SourceCodeLink
              href="https://github.com/dee-gmiterko/yarn-plugin-prod-lockfiles"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <p>
            Yarn plugin that generates production-only docker.yarn.lock
            and docker.package.json for a focused workspace - useful for lean
            Docker image builds where each image should install only
            dependencies needed by the workspace package while preserving
            immutability of yarn.lock files.
          </p>
          <p className="text-center">
            <LightboxButton
              path="tooling/prod-lockfile-diagram.png"
              alt="Monorepo workspace with yarn.lock running yarn prod-lockfile to produce separate package.json and yarn.lock for each output package"
              buttonClassName="w-60"
            />
          </p>
        </div>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Tidy cache (2026)</h4>
            <SourceCodeLink
              href="https://github.com/dee-gmiterko/clang-tidy-cache"
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <p>
            A drop-in clang-tidy wrapper that caches results, so unchanged
            files are not re-analyzed. Use it in place of clang-tidy, with the
            same arguments. Gain faster validation.
          </p>
        </div>
      </Page>

      <Page
        title="Asset pipeline"
        skills={[
          "ProdX",
          "Texture generation",
          "Blender",
          "Neural style transfer",
          "Tooling",
        ]}
      >
        <p>
          Without any assets to look at, your game world would be a very
          boring place. But creating them is an extremely time-consuming
          process. So there always was this drive to automate it as much as
          possible.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Tile builder (2017)</h4>
            <SourceCodeLink href="https://github.com/dee-gmiterko/dee-garden-asset-pipeline" target="_blank" rel="noreferrer" />
          </div>
          <p>
            This tool takes two inputs: a color mask and a height map. Then
            proceeds to build a 3D model which is used to render a base image.
            As the next step it uses machine learning to enhance the texture
            guessing some additional details.
          </p>
          <p>
            <LightboxButton
              path="tile-builder.png"
              alt="Tile builder pipeline"
            />
          </p>
        </div>
      </Page>

      <Page
        title="Custom platforms"
        skills={[
          "ProdX",
          "OBS",
          "VRM",
          "Three.js",
          "React",
          "TypeScript",
          "MediaPipe",
          "Python",
          "Websockets",
        ]}
      >
        <p>
          When no existing product does exactly what I need it is often not too terrible to
          put one together from the pieces that do fit.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Personal streaming platform (2026)</h4>
          </div>
          <p>
            A personal live-streaming studio with animated avatar and custom overlays.
          </p>
          <p className="text-center">
            <LightboxButton
              path="stream-overlay.png"
              alt="Extended OBS stream platform with animated avatar, layout and control panels"
              buttonClassName="w-80"
            />
          </p>
          <ul>
            <li>
              <span className="subheading">
                Custom stream layout tooling
              </span>{" - "}
              hand-built on-screen layouts: scenes, panels, chat, schedule and countdown
            </li>
            <li>
              <span className="subheading">
                VRM renderer, body detection, face shape recognition
              </span>{" - "}
              while camera tracks head, face shapes and hands the avatar mirrors
              each expression on the screen
            </li>
            <li>
              <span className="subheading">
                OBS integrations
              </span>
            </li>
          </ul>
        </div>
      </Page>

      {/* <Page
        title="Countless file converters"
        skills={["DataX", "Tooling"]}
      >
        <p>
          Every project ends up needing its data in a different shape. So
          I've written a small converter for each. Countless, by now.
        </p>
        <Suspense fallback={null}>
          <FileConvertersDiagram />
        </Suspense>
        <div className="grow" />
        <div className="example-bar">
          <ul>
            <li />
            <li />
            <li />
          </ul>
        </div>
      </Page> */}

      <ReferencesPage references={["linkedin", "github"]} />
    </Book>
  );
};

export default SlidesTooling;
