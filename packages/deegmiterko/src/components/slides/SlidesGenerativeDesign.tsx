import React, { FunctionComponent } from "react"
import { StaticImage } from "gatsby-plugin-image";

import Book from "../Book";
import ReferencesPage from "../ReferencesPage";
import TitlePage from "../TitlePage";
import Page from "../Page";

import imgOutputImage from "../../images/content/output-image.png";
import vidOutputImage from "../../images/content/output-image.mp4";
import imgTransformation from "../../images/content/transformation.png";
import vidTransformation from "../../images/content/transformation.webm";
import imgParametrizationA from "../../images/content/parametrization-a.png";
import vidParametrizationA from "../../images/content/parametrization-a.mp4";
import imgParametrizationB from "../../images/content/parametrization-b.png";
import vidParametrizationB from "../../images/content/parametrization-b.mp4";
import imgParametrizationC from "../../images/content/parametrization-c.png";
import vidParametrizationC from "../../images/content/parametrization-c.mp4";
import imgSimulation from "../../images/content/simulation.png";
import vidSimulation from "../../images/content/simulation.mp4";
import LightboxButton from "../LightboxButton";
import Scramble from "../Scramble";

const SlidesGenerativeDesign: FunctionComponent = () => {

  return (
    <Book id="generative-design" title="Generative Design">

      <TitlePage title="Generative Design" lecture={2}>
        <p>
          The process of creating media with the help of scripts and purpose built programs.
        </p>
      </TitlePage>

      <Page title="Purposes of Generative Design" level={2}>
        <div className="grow"></div>
        <h3>Just art</h3>
        <p>First and foremost, it’s most commonly presented just as a form of art. It can be used to create visually appealing images, animations, or even music.</p>
        <div className="example-bar">
          <LightboxButton path="purpose-art.png" alt="Abstract generated flower" />
        </div>
      </Page>

      <Page title="To visualize">
        <p>However, generative art can be utilized also for other means. For example to visually represent the significance of data to the viewer. As visual content is processed much faster and easier than text or a spreadsheet full of data it’s advantageous to let a computer generate visual representations for them.</p>
        <div className="example-bar">
          <LightboxButton path="purpose-visualize.png" buttonClassName="w-80" alt="Visualization comparison" />
        </div>
        <h3>Or simulate</h3>
        <p>Another related field is simulation and modeling. Its aim is to copy physical properties and visually understand complex systems by building their approximations - models.</p>
        <div className="example-bar">
          <LightboxButton path="purpose-simulate.png" buttonClassName="w-80" alt="Simulation comparison" />
        </div>
      </Page>

      <Page title="Media used by Generative Design" level={2}>
        <h3>Image and video</h3>
        <p>The most commonly used media in generative design are without a doubt images and video.</p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Block animation (2016)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/processing-sketches/tree/master/sketch_161106x">&lt;/&gt; Browse source code</a>
          </div>
          <p>To show this output format I have choosen a very simple animation generated by a computer.</p>
          <div className="show-video-print-image">
            <video poster={imgOutputImage} src={vidOutputImage} loop={true} autoPlay={true} muted={true} />
          </div>
        </div>
      </Page>

      <Page title="3D objects">
        <p>Rendering tools became very powerful over the years. And in combination with generative design they can produce visually appealing and complex scenes.</p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Golden cards (2021)</h4>
          </div>
          <p>Here, I made a collection of procedurally generated 3D models. I used a modeling software Blender and a script which builds the scene and then renders it. Each card here represents a topic that people talked about at a given day.</p>
          <p className="text-center">
            <LightboxButton path="output-3d.png" buttonClassName="w-80" alt="Procedurally generated 3D models of pins" />
          </p>
        </div>
      </Page>

      <Page title="Games and virtual worlds">
        <p>The most well known example of this approach is Minecraft. I can provide you with a procedurally generated world for your game. Or it can be used as a content to fill the background of your scenes. For example an generated cityscape.</p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Infinite procedural worlds (2015)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/py-2050/">&lt;/&gt; Browse source code</a>
          </div>
          <p>The next example is in an old procedurally generated world of mine. It's built using a recursive of galaxies, planets, their terrains, and trees. User interface allows you to view the world on any zoom level and it's infinite in both x and y directions.</p>
          <p>
            <LightboxButton path="output-game-world.png" alt="Simple flat planets covered in trees" />
          </p>
          <p className="text-center">
            <a className="btn-source" href="http://ienze.me/py-2050/">Try it out for yourself</a>
          </p>
        </div>
      </Page>

      <Page title="Generative Design concepts" level={2}>
        <h3>Parameterization</h3>
        <p>I htink that the most important concept of generative design is parameterization. Script can use input parameters (for example width of the image, numbef or fish) and using them calculate location, shape, color, and movement of objects on the screen. You should be then able to tweak parameters to produce many differnet art pieces.</p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>“Ponyo” animation (2016)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/processing-sketches/tree/master/ponyo">&lt;/&gt; Browse source code</a>
          </div>
          <p>If you watch this example closely you can notice that it's only using a single math function. sin(x). But when it's applied to basic properties of objects like position, rotation, and color it can still produce complex looking results.</p>
          <div className="show-video-print-image">
            <div className="parameterization-videos">
              <video poster={imgParametrizationA} src={vidParametrizationA} loop={true} autoPlay={true} muted={true} />
              <video poster={imgParametrizationB} src={vidParametrizationB} loop={true} autoPlay={true} muted={true} />
              <video poster={imgParametrizationC} src={vidParametrizationC} loop={true} autoPlay={true} muted={true} />
            </div>
          </div>
        </div>
      </Page>

      <Page title="Repeatability">
        <p>I think the second most important concept of procedural design is repeatability. Idea of this content is really straightforward: Given a script (source code) and inputs users can always generate the same artwork. So this means you do not have to store generated media as it can be always reproduced. Or you can still choose to produce new artworks by altering its code or inputs.</p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>Fern profile picture (2022)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/processing-sketches/tree/master/interactive-fern">&lt;/&gt; Browse source code</a>
          </div>
          <p>I decided to demonstrate this concept on this simple “profile picture generator”. Given a name it will produce an image composed of fern leaves to represent the name.</p>
          <p>
            <LightboxButton path="repeatability.png" alt="Repeatability in generative design" />
          </p>
          <p className="text-center">
            <a className="btn-source" href="https://interactive-fern.netlify.app/">Try it out for yourself</a>
          </p>
        </div>
      </Page>

      <Page title="Randomness">
        <p>The most important concept of generative art may be randomness. It can be used to alter input parameters of the generative process to produce a varied collection of artworks or assets.</p>
        <p>You can use this concept to produce many unique but visually similar items. For example a lot of different rocks for a game, a collection of card decks where each package is slightly different, or now-so-popular NFT collections.</p>
        <div className="grow"></div>
        <div className="example">
          <div className="example-title">
            <h4>A tri-tree (2016)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/processing-sketches/tree/master/sketch_161006d">&lt;/&gt; Browse source code</a>
          </div>
          <p>In this example I am using a stream of random numbers to place new leaves forming tree-like structures in a process.</p>
          <p>
            <LightboxButton path="random-tree.png" alt="Randomness, the most important concept of generative design" />
          </p>
        </div>
      </Page>

      <Page title="Transformation">
        <p>Another approach to procedural art is not to fully generate the media by yourself but instead take some existing content as an input and only transform it in a way. You can take things like images, videos, text, numbers, datasets and use a deterministic script to produce new content. For example by doing geometric transformations, color modifications, abstraction, or simplification.</p>
        <div className="example">
          <div className="example-title">
            <h4>Album mood (2018)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/2d-color-picker/">&lt;/&gt; Browse source code</a>
          </div>
          <p>To demonstrate this concept I choose a project that turns a series of photos (for example a gallery or video) into an abstract image containing a color palette that best represents the original images. This example uses statistical methods and other math magic to extract the relevant information.</p>
          <div className="show-video-print-image">
            <video poster={imgTransformation} src={vidTransformation} loop={true} autoPlay={true} muted={true} />
          </div>
        </div>
      </Page>

      <Page title="Visualization">
        <p>A specific case of transformations are data visualizations. We can treat real world data as an input into a procedural design script. But in this case its purpose isn't an artistic expression, but a representation of information.</p>
        <div className="example">
          <div className="example-title">
            <h4>Geocache density (2019)</h4>
            <a className="btn-source" href="https://github.com/dee-gmiterko/cacheviz">&lt;/&gt; Browse source code</a>
          </div>
          <p>For example here I used a heatmap view, and various plots to describe distribution of caches and their visits for a game played in the real world, Geocaching. I am sure you have encountered many visualizations in your life, so I don’t have to explain their capabilities.</p>
          <p className="text-center">
            <LightboxButton path="visualization.png" buttonClassName="w-80" alt="Analytic data visualization" />
          </p>
        </div>
      </Page>

      <Page title="Simulation">
        <p>And the last concept used in a generative design I can think of is simulation. This can include physics simulation, flow of fluids, or discrete agents interacting with each other.</p>
        <div className="example">
          <div className="example-title">
            <h4>Sheep herding simulation (2017)</h4>
          </div>
          <p>I have prepared this simulation using very few simple rules which jointly produce a complex behavior. In this case we have three basic rules:</p>
          <ul>
          <li>sheep alter their heading to match other sheep nearby</li>
          <li>sheep runs away from a dog</li>
          <li>dog tries to preserve a fixed distance from closest sheep</li>
          </ul>
          <p>And their interaction forces sheep to create a herd every single time even though it is not directly specified anywhere.</p>
          <div className="show-video-print-image">
            <video className="w-40" poster={imgSimulation} src={vidSimulation} loop={true} autoPlay={true} muted={true} />
          </div>
        </div>
      </Page>

      <Page title="Concept mixign" level={2}>
        <p>
          Only once you add all these concepts together you can start to see the full potential of generative design. It can be used to create art, visualize data, simulate complex systems, or even generate new content based on existing one. The most powerful use cases are still in game development. But I can imagine understanding individual concepts can help you create visuals of any kind.
        </p>
        <div className="example-bar">
          <div className="example-title">
            <h4>Puzzles (<em title="To be defined"> TBD </em>)</h4>
            <span className="btn-source disabled">&lt;/&gt; Browse source code</span>
          </div>
          <p>
            <Scramble text="A very secret description of an ongoing project that you read very successfully." />
          </p>
          <p className="text-center">
            <LightboxButton path="puzzles.jpg" alt="Generative design concept mixing" buttonClassName="w-50 opacity-50" />
          </p>
        </div>
        <p className="text-center">...</p>
        <div className="grow" />
      </Page>

      <ReferencesPage />

    </Book>
  )
}

export default SlidesGenerativeDesign;


/*

$ Story $
- A bottom to top - additive design - properties of generative design

- [slides] generative design (replace/remove first one?)
  - (done) $-github links-$
  - enhance AI gen section, add gen page
  "Hire me": Us, cooperating -> move, rephrase page

$ Conslusion $
- putting all properties together allows for a creation of very powerfull tools. And it's doesn't have to be just about art.

*/