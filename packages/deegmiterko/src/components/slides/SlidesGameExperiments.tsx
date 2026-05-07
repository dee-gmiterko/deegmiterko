import React, { FunctionComponent } from "react";

import Book from "../Book";
import Page from "../Page";
import ReferencesPage from "../ReferencesPage";
import TitlePage from "../TitlePage";

import imgOpenGlForest from "../../images/content/opengl-forest.png";
import vidOpenGlForest from "../../images/content/opengl-forest.webm";
import imgTrainwreck from "../../images/content/trainwreck.png";
import vidTrainwreck from "../../images/content/trainwreck.webm";
import LightboxButton from "../LightboxButton";
import { ThumbnailNode } from "../../pages/index";

const SlidesGameExperiments: FunctionComponent<{ thumbnails: ThumbnailNode[] }> = ({ thumbnails }) => {

  return (
    <Book id="game-experiments" title="Games and Experiments" thumbnails={thumbnails}>

      <TitlePage title="Games and Experiments" lecture={4}>
        <p>
          Games were always pushing the boundaries of what is possible. All in the persuit of telling a story, or creating an unforgetable experience.
        </p>
      </TitlePage>

      <Page title="Game of Life">
        <p>
          Let's start with one of the simplest games there is. <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">Conway's Game of Life</a> is a famous 0-player game turning few simple rules into a living, breathing world.
        </p>
        <p>

        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>GOL-hash (2016)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/gol-hash">&lt;/&gt; Browse source code</a>
          </div>
          <p>
            Based on The Game of Life, I've created a simple visual-hash function that turns any string or file into it's unique representation. It can either output an image respresenting the data or a compress it into string.
          </p>
          <p>
            <em className="smaller">Disclaimer: I don't recommend using it tho, as I haven't validated that it's uniformity or it's fitness for any secure use.</em>
          </p>
          <p>
            <LightboxButton path="gol-hash.jpg" alt="Game of Life based hash function" />
          </p>
        </div>
      </Page>

      <Page title="Engine or not to engine?" level={2} titleClassName="mb-2">
        <p>
          The age old question that seems to be brough out every time a new person enters the game development community.
        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Open GL foreset (2017)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/opengl-forest">&lt;/&gt; Browse source code</a>
          </div>
          <p>
            A low level implementation of a 3D scene using Open GL you can walk around in. It implements baisc model loading, lighting, reflections, and animations.
          </p>
          <p>
            <video poster={imgOpenGlForest} src={vidOpenGlForest} loop={true} autoPlay={true} muted={true} />
          </p>
        </div>
      </Page>

      <Page title="Web constrains">
        <p>
          You may find yourself in a situation where you have to work with limited capabilities. A great example of this is WebGL - a web-based graphics library in your browser.
        </p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Trainwreck (2017, 2022)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/trainwreck">&lt;/&gt; Browse source code</a>
          </div>
          <p>
            A simple game that I've created using <a href="https://pixijs.com/">PixiJS</a> library on top of WebGL, featuring an endless runner where you are in contorl of switching train tracks to avoid obstacles.
          </p>
          <p>
            <video poster={imgTrainwreck} src={vidTrainwreck} loop={true} autoPlay={true} muted={true} />
          </p>
          <p className="text-center">
            <a className="btn-source" href="https://ienze.me/trainwreck/">Try it out for yourself</a>
          </p>
        </div>
      </Page>

      <Page title="Modding">
        <p>
          One of the best known games that allow you to heavily modify it's content is Minecraft. Which I of course extensively used to create my own mods, plugins, and servers at the time.
        </p>
        <h4>
          Server side
        </h4>
        <div className="example-bar">
          <div className="example-title">
            <h4>Bukkit plugins (2010 – 2013)</h4>
          </div>
          <p>
            I've made many plugins for Minecraft servers in that time. Includin few public ones that gained decent popularity. But as that was over a decade ago, they are no longer maintained and fell into obscurity. For example:
          </p>
          <ul>
            <li>Adding "radiation" and protection</li>
            <li>"Residences" that can be bough, sold, and rented</li>
            <li>Building "scarecrows" scaring away mobs</li>
          </ul>
        </div>
        <h4>
          Client side mods and resoruce packs
        </h4>
        <div className="example-bar-w-image">
          <div className="example-title">
            <h4>Modding (2012 – 2013)</h4>
          </div>
          <p>
            For example I made this tiny mod that adds a cute bulldozer to the game - flattening the terrain in front of you as you drive it around.
          </p>
          <LightboxButton path="minecraft-bulldozer.png" alt="Minecraft mod: bulldozer" />
        </div>
      </Page>

      <Page title="Game engine">
        <p>
          On the other end of the spectrum, you have game engines that are purpose built and can significantly speed up your development. Unity is a an example of a game engine that allows you to quickly create 3D and 2D games.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Card collecting game (2023)</h4>
            <a className="btn-source" href="https://badbunnies.xyz/">Game website</a>
          </div>
          <p>
            During my freelancing period I've worked on a blockchain based card collecting game. My area of focus was integration of distributed systems, creating WebGl port, websocket based networking, and backend. But I've also fixed several visual issues and replaced card asset loading with a more efficient method.
          </p>
          <p className="text-center">
            <LightboxButton path="bad-bunnies.jpg" buttonClassName="w-80" alt="Unity card collecting game" />
          </p>
        </div>
      </Page>

      <Page title="Building an experience" level={2}>
        <h3>Level design</h3>
        <p>
          Hand in hand with game development goes level design. It's what actually makes an experience out of game mechanics. And once again, it's very often been pushed to the limits of what is possible on the given platform.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>London map (2011 – 2013)</h4>
          </div>
          <p>
            A very common practice is to pack as much as possible into a limited space, trying to hide it's borders in naturally looking surroundings.
          </p>
          <p className="text-center">
            <LightboxButton path="london-map.png" alt="Minecraft London map" buttonClassName="w-80" />
          </p>
        </div>
      </Page>

      <Page title="Asset pipeline">
        <p>
          Without any assets to look at, your game world would be a very boring place. But creating them is extremely time consuming process. So there always was this drive to automate it as much as possible.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Tile builder (2017)</h4>
          </div>
          <p>
            This tool takes two inputs: a color mask and a height map. Then proceeds to build a 3D model which is used to render a base image. As the next step it uses a machine learning to enhance the texture guessing some additional details.
          </p>
          <p>
            <LightboxButton path="tile-builder.png" alt="Tile builder pipeline" />
          </p>
        </div>
      </Page>

      <Page title="Supporting tech" level={2}>
        <h3>Networking</h3>
        <p>
          In games it's not just about sending data in between players, but also about making sure it's done in a timely manner and actions are authorized properly.
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>"Collaborative JSON" networking (2017)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/samos">&lt;/&gt; Browse source code</a>
          </div>
          <p>
            However, when it comes to silly little games even a simple client authoritative solution will do. So I tried to do as little as possible to make a working multiplayer real-time browser game. I used a <a className="subheading" href="https://www.npmjs.com/package/diffsync">"collaborative JSON editor"</a> library to synchronize game state between players (and server bots).
          </p>
          <LightboxButton path="json-networking.png" alt="Shared JSON networking" />
        </div>
      </Page>

      <Page title="Emulation">
        <p>
          Another area where game development reached level of complexity preceeding or not at all present in other fields is emulation and platform porting.
        </p>
        <div className="example">
          <div className="example-title">
            <h4>Fish Fillets <span className="subheading">online</span> (2018)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/fillets-online">&lt;/&gt; Browse source code</a>
          </div>
          <p>
            I made a web port of this popular puzzle game, making it agian a bit more accessible for the current age. Transpiling it's source code using a tool called <a href="https://emscripten.org/">Emscripten</a> and fixing issues that arose in the process. Most notably replacing some of libraries with versions that are compatible with running in browser.
          </p>
          <p className="text-center">
            <LightboxButton path="fillets-online.png" alt="Fish Fillets online" buttonClassName="w-50" />
          </p>
          <p className="text-center">
            <a className="btn-source" href="https://ienze.me/fillets-online">Play now</a>
          </p>
        </div>
      </Page>

      <Page title="Pushing the limits" level={2}>
        <p>
          No matter whether it comes to packing the most into limited space on cartridge, pioneering new 3D rendering tricks, or virtual reality. Games were always pushing the boundaries of what is possible. Often times long before the advances come to other fields.
        </p>
        <p>
          I would keep my eyes open for any new developments in gaming as it's often a good indicator of what's to come. Even when it's microtransactions.
        </p>
        <div className="grow" />
        <p>
          See you there.
        </p>
      </Page>

      <ReferencesPage references={["ienze.me", "github"]} />

    </Book>
  )
}

export default SlidesGameExperiments;
