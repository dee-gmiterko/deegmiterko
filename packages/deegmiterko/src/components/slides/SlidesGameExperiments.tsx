import React, { FunctionComponent, lazy, Suspense } from "react";

import Book from "../Book";
import Page from "../Page";
import ReferencesPage from "../ReferencesPage";
import TitlePage from "../TitlePage";

import imgOpenGlForest from "../../images/content/opengl-forest.png";
import vidOpenGlForest from "../../images/content/opengl-forest.webm";
import imgTrainwreck from "../../images/content/trainwreck.png";
import vidTrainwreck from "../../images/content/trainwreck.webm";
import imgNecroDungeonNpc from "../../images/content/necro-dungeon-npc.png";
import vidNecroDungeonNpc from "../../images/content/necro-dungeon-npc.webm";
import LightboxButton from "../LightboxButton";
import { Slide, ThumbnailNode } from "../../types";

const NecroDungeonNpcDiagram = lazy(
  () => import("../necro-dungeon/NecroDungeonNpcDiagram"),
);

const RegrowIdleDiagram = lazy(() => import("../regrow/RegrowIdleDiagram"));
const RnscTurnDiagram = lazy(() => import("../rnsc/RnscTurnDiagram"));

const SlidesGameExperiments: FunctionComponent<{
  thumbnails: ThumbnailNode[];
}> = ({ thumbnails }) => {
  return (
    <Book bookId={Slide.GameExperiments} thumbnails={thumbnails}>
      <TitlePage title="Games and Experiments" lecture={4}>
        <p>
          Games were always pushing the boundaries of what is possible. All in
          the pursuit of telling a story, or creating an unforgettable
          experience.
        </p>
      </TitlePage>

      <Page
        title="Game of Life"
        skills={["Cellular automata", "Python", "CLI"]}
      >
        <p>
          Let's start with one of the simplest games there is.{" "}
          <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
            Conway's Game of Life
          </a>{" "}
          is a famous zero-player game turning a few simple rules into a
          living, breathing world.
        </p>
        <p></p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>GOL-hash (2016)</h4>
            <a
              className="btn-source"
              href="https://github.com/dee-gmiterko/gol-hash"
            >
              &lt;/&gt; Browse source code
            </a>
          </div>
          <p>
            Based on The Game of Life, I've created a simple visual-hash
            function that turns any string or file into its unique
            representation. It can either output an image representing the
            data or compress it into a string.
          </p>
          <p>
            <em className="smaller">
              Disclaimer: I don't recommend using it tho, as I haven't
              validated that its uniformity or its fitness for any secure use.
            </em>
          </p>
          <p>
            <LightboxButton
              path="gol-hash.jpg"
              alt="Game of Life based hash function"
            />
          </p>
        </div>
      </Page>

      <Page
        title="Necro Dungeon"
        skills={[
          "Game dev",
          "Godot",
          "Phong lighting",
          "C#",
          "GDScript",
          "GLSL",
          "GDShader",
          "Blender",
          "Python",
        ]}
      >
        <p>
          A dungeon-building game produced with Godot and C#. Take a charge in
          building rooms, setting traps, and assemble monsters from body
          parts, defending from adventurers…
        </p>
        <p>
          Its isometric look needed a custom lighting system blending 2D
          sprites with 3D like Phong reflection model.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>IsoLit (2026)</h4>
            <a
              className="btn-source"
              href="https://github.com/dee-gmiterko/isolit"
            >
              &lt;/&gt; Browse source code
            </a>
          </div>
          <p>
            Isometric 2D lighting for Godot where lit surfaces live in
            isometric world space projected onto the 2D sprites. It also
            supports wall obstruction map for shadows.
          </p>
          <p>
            <LightboxButton
              path="necro-dungeon.png"
              alt="Necro Dungeon screenshot"
            />
          </p>
        </div>
      </Page>

      <Page
        title="NPCs"
        subtitle="Non-player characters"
        titleNode={
          <div className="order-1">
            <h3>
              NPCs <p className="subtitle">Non-player characters</p>
            </h3>
            <p>
              A game world feels empty without characters that act on their
              own. Adventurers in Necro Dungeon explore, fight, flee and loot
              without anyone steering them.
            </p>
          </div>
        }
        className="four-squares"
        skills={[
          "NPC behavior",
          "Finite state machines",
          "Group cooperation",
          "A* pathfinding",
          "Perception modeling",
          "Unit tests",
          "C#",
        ]}
      >
        <div className="order-2 no-padding">
          <video
            poster={imgNecroDungeonNpc}
            src={vidNecroDungeonNpc}
            loop={true}
            autoPlay={true}
            muted={true}
          />
        </div>
        <div className="order-3 no-padding">
          <Suspense fallback={null}>
            <NecroDungeonNpcDiagram />
          </Suspense>
        </div>
        <div className="order-4">
          <h4>Adventurig party and monsters behaviors</h4>
          <p>
            Each party shares an idea of how the dungeon looks, from what they
            collectively observed. Known state is then used by the group to change
            goals, determine individual tasks, and distribute amongs them.
          </p>
        </div>
      </Page>

      <Page
        title="Idle progress"
        skills={[
          "Game design",
          "Game economy",
          "Simulation",
          "Simplex solver",
          "Godot",
          "C++",
          "CMake",
          "Game Backend",
          "TypeScript",
          "Node.js",
          "Express",
          "PostgreSQL",
          "Testing",
        ]}
      >
        <p>
          A game world keeps moving when nobody is watching: engines drive,
          stock runs out. Most games fake it with a background loop or a flat
          "you were away" bonus.
        </p>
        <p>
          Project Regrow is an idle game about vehicles running on resources
          you wire up. It works out what happened while you were away from
          only what you decided and how long it has been.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Project Regrow (2026)</h4>
          </div>
          <div className="col-7-5">
            <div>
              <Suspense fallback={null}>
                <RegrowIdleDiagram />
              </Suspense>
            </div>
            <div>
              <p>
                The design had to solve a few problems at once. Every player
                and every device should reach the same result. Nothing should
                need to run while a player is away. And resources are scarce
                enough that every connection you wire matters.
              </p>
            </div>
          </div>
        </div>
      </Page>

      <Page
        title="Engine or not to engine?"
        level={2}
        skills={["3D graphics", "C++", "OpenGL", "GLSL", "GLEW", "freeglut"]}
        titleClassName="mb-2"
      >
        <p>
          The age old question that seems to be brought up every time a new
          person enters the game development community.
        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>OpenGL forest (2017)</h4>
            <a
              className="btn-source"
              href="https://github.com/dee-gmiterko/opengl-forest"
            >
              &lt;/&gt; Browse source code
            </a>
          </div>
          <p>
            A low level implementation of a 3D scene using OpenGL you can walk
            around in. It implements basic model loading, lighting,
            reflections, and animations.
          </p>
          <p>
            <video
              poster={imgOpenGlForest}
              src={vidOpenGlForest}
              loop={true}
              autoPlay={true}
              muted={true}
            />
          </p>
        </div>
      </Page>

      <Page
        title="Web constraints"
        skills={["WebGL", "PixiJS", "React", "Redux", "Vite"]}
      >
        <p>
          You may find yourself in a situation where you have to work with
          limited capabilities. A great example of this is WebGL - a web-based
          graphics library in your browser.
        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Trainwreck (2017, 2022)</h4>
            <a
              className="btn-source"
              href="https://github.com/dee-gmiterko/trainwreck"
            >
              &lt;/&gt; Browse source code
            </a>
          </div>
          <p>
            A simple game that I've created using{" "}
            <a href="https://pixijs.com/">PixiJS</a> library on top of WebGL,
            featuring an endless runner where you are in control of switching
            train tracks to avoid obstacles.
          </p>
          <p>
            <video
              poster={imgTrainwreck}
              src={vidTrainwreck}
              loop={true}
              autoPlay={true}
              muted={true}
            />
          </p>
          <p className="text-center">
            <a className="btn-source" href="https://ienze.me/trainwreck/">
              Try it out for yourself
            </a>
          </p>
        </div>
      </Page>

      <Page
        title="Modding"
        skills={["Modding", "Java", "Bukkit", "Minecraft Forge"]}
      >
        <p>
          One of the best known games that allow you to heavily modify its
          content is Minecraft. Which I of course extensively used to create
          my own mods, plugins, and servers at the time.
        </p>
        <h4>Server side</h4>
        <div className="example-bar">
          <div className="example-title">
            <h4>Bukkit plugins (2010 – 2013)</h4>
          </div>
          <p>
            I've made many plugins for Minecraft servers in that time.
            Including a few public ones that gained decent popularity. But as
            that was over a decade ago, they are no longer maintained and fell
            into obscurity. For example:
          </p>
          <ul>
            <li>Adding "radiation" and protection</li>
            <li>"Residences" that can be bought, sold, and rented</li>
            <li>Building "scarecrows" scaring away mobs</li>
          </ul>
        </div>
        <h4>Client side mods and resource packs</h4>
        <div className="example-bar-w-image">
          <div className="example-title">
            <h4>Modding (2012 – 2013)</h4>
          </div>
          <p>
            For example I made this tiny mod that adds a cute bulldozer to the
            game - flattening the terrain in front of you as you drive it
            around.
          </p>
          <LightboxButton
            path="minecraft-bulldozer.png"
            alt="Minecraft mod: bulldozer"
          />
        </div>
      </Page>

      <Page
        title="Game engine"
        skills={[
          "Game dev",
          "Blockchain",
          "Unity",
          "WebGL",
          "Websockets",
          "Solidity",
          "TypeScript",
          "Firebase",
          "Hardhat",
          "ethers",
          "OpenZeppelin",
          "Gatsby",
          "React",
        ]}
      >
        <p>
          On the other end of the spectrum, you have game engines that are
          purpose built and can significantly speed up your development. Unity
          is an example of a game engine that allows you to quickly create 3D
          and 2D games.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Card collecting game (2023)</h4>
            <a className="btn-source" href="https://badbunnies.xyz/">
              Game website
            </a>
          </div>
          <p>
            During my freelancing period I worked on a blockchain based card
            collecting game. My area of focus was integration of distributed
            systems, creating WebGL port, websocket based networking, and
            backend. But I've also fixed several visual issues and replaced
            card asset loading with a more efficient method.
          </p>
          <p className="text-center">
            <LightboxButton
              path="bad-bunnies.jpg"
              buttonClassName="w-80"
              alt="Unity card collecting game"
            />
          </p>
        </div>
      </Page>

      <Page
        title="Building an experience"
        level={2}
        skills={["Level design", "Minecraft"]}
      >
        <h3>Level design</h3>
        <p>
          Hand in hand with game development goes level design. It's what
          actually makes an experience out of game mechanics. And once again,
          it's very often been pushed to the limits of what is possible on the
          given platform.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>London map (2011 – 2013)</h4>
          </div>
          <p>
            A very common practice is to pack as much as possible into a
            limited space, trying to hide its borders in natural-looking
            surroundings.
          </p>
          <p className="text-center">
            <LightboxButton
              path="london-map.png"
              alt="Minecraft London map"
              buttonClassName="w-80"
            />
          </p>
        </div>
      </Page>

      <Page
        title="Supporting tech"
        level={2}
        skills={[
          "Networking",
          "Multiplayer",
          "Steamworks",
          "C++",
          "Godot",
          "CMake",
          "Docker",
          "Testing",
          "Python",
        ]}
      >
        <h3>Networking</h3>
        <p>
          In games it's not just about sending data between players, but also
          about making sure it's done in a timely manner and actions are
          authorized properly.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Turn-based multiplayer (2026)</h4>
          </div>
          <div className="col-7-5">
            <div>
              <Suspense fallback={null}>
                <RnscTurnDiagram />
              </Suspense>
            </div>
            <div>
              <p>
                A turn-based game for up to four players. Only the opening
                seed and each accepted move cross the network, and every
                client runs the same rules to reach the same state. Local, LAN
                and Steam play share one code path, and a dropped player
                rejoins by replaying the moves.
              </p>
            </div>
          </div>
        </div>
      </Page>

      <Page
        title="Emulation"
        skills={["Platform porting", "Emscripten", "C++", "SDL", "Lua"]}
      >
        <p>
          Another area where game development reached a level of complexity
          preceding or not at all present in other fields is emulation and
          platform porting.
        </p>
        <div className="example">
          <div className="example-title">
            <h4>
              Fish Fillets <span className="subheading">online</span> (2018)
            </h4>
            <a
              className="btn-source"
              href="https://github.com/dee-gmiterko/fillets-online"
            >
              &lt;/&gt; Browse source code
            </a>
          </div>
          <p>
            I made a web port of this popular puzzle game, making it again a
            bit more accessible for the current age. Transpiling its source
            code using a tool called{" "}
            <a href="https://emscripten.org/">Emscripten</a> and fixing issues
            that arose in the process. Most notably replacing some libraries
            with versions that are compatible with running in browser.
          </p>
          <p className="text-center">
            <LightboxButton
              path="fillets-online.png"
              alt="Fish Fillets online"
              buttonClassName="w-50"
            />
          </p>
          <p className="text-center">
            <a className="btn-source" href="https://ienze.me/fillets-online">
              Play now
            </a>
          </p>
        </div>
      </Page>

      <Page title="Pushing the limits" level={2}>
        <p>
          No matter whether it comes to packing the most into limited space on
          cartridge, pioneering new 3D rendering tricks, or virtual reality.
          Games were always pushing the boundaries of what is possible. Often
          times long before the advances come to other fields.
        </p>
        <p>
          I would keep my eyes open for any new developments in gaming as it's
          often a good indicator of what's to come. Even when it's
          microtransactions.
        </p>
        <div className="grow" />
        <p>See you there.</p>
      </Page>

      <ReferencesPage references={["ienze.me", "github"]} />
    </Book>
  );
};

export default SlidesGameExperiments;
