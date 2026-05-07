import React, { FunctionComponent } from "react";
import Book from "../Book";
import ReferencesPage from "../ReferencesPage";
import TagList from "../TagList";
import TitlePage from "../TitlePage";
import Page from "../Page";
import LightboxButton from "../LightboxButton";
import { ThumbnailNode } from "../../pages/index";

const SlidesProfessional: FunctionComponent<{ thumbnails: ThumbnailNode[] }> = ({ thumbnails }) => {

  return (
    <Book id="professional" title="Professional" thumbnails={thumbnails}>

      <TitlePage title="Professional" subtitle="AKA “a real job”" lecture={5}>
        <p>
          Working with others may provide it's own challenges, but it's essential to scale the things you can do well beyond what you could do alone.
        </p>
      </TitlePage>

      <Page title="Website development">
        <p>
          Websites are the most common way to present information on the internet. And I have experience with building many different kinds of them. Blogs, static, eshops, internal applications, you name it.
        </p>
        <p>
          Their development is commonly split into two parts, frontend (what users sees in their browser) and backend (what happens on the server). I've worked on both.
        </p>
        <div className="example-bar">
          <div className="example-title">
            <h4>Backend developer @ <a className="subheading" href="https://wame.sk/">Wame</a> (2015 – 2016)</h4>
          </div>
          <TagList tags={["Web", "Backend", "PHP", "Nette", "E-commerce", "HTML", "E-mail camapigns"]} />
          <p>
            Development of custom e-commerce solutions as a part of a small team. I've worked on a variety of eshops.
          </p>
        </div>
        <p>
          Later during my studies at MUNI I've joined InQool in a part time capacity:
        </p>
        <div className="example-bar">
          <div className="example-title">
            <h4>Frontend developer @ <a className="subheading" href="https://inqool.cz/">InQool</a> (2017 – 2019)</h4>
          </div>
          <TagList tags={["Frontend", "Web", "Javascript", "CSS", "PrestaShop", "E-commerce", "React"]} />
          <p>
            Builing custom web applications for eshops. Some notable projects I've worked on include <a href="https://www.brnoid.cz/">BrnoID</a>
            and <a href="https://kreativator.cz/">Kreativator</a>. ReactJS applicaiton for customizing prints on garments.
          </p>
        </div>
      </Page>

      <Page title="Data engineering">
        <p>
          It's one thing to work on a closed order like an eshop that is more or less built and delivered once. But it's a whole different story to has a little bit of sway on a constantly evolving product while it's being used by thousands of people.
        </p>
        <div className="grow" />
        <div className="example-bar">
          <div className="example-title">
            <h4>Data Engineer @ <a className="subheading" href="https://kiwi.com/">Kiwi.com</a> (2019 – 2022)</h4>
          </div>
          <TagList tags={["Data processing", "Python", "Pipeline building", "Airflow", "PubSub", "PostgreSQL", "DataOps", "BigQuery", "Data Quality", "Internal product"]} />
          <p>
            I was mostly responsible for creating and maintaining data pipelines, building data warehouse, assisting with analysis and visualization, ensuring data quality.
          </p>
        </div>
        <p></p>
        <div className="example">
          <div className="example-title">
            <h4 className="mb-0">Airflow (2019 – 2022)</h4>
          </div>
          <p className="subheading">The quintessential tool for managing data workflows.</p>
          <p>
            As a link between server platform underneat and the data processing scripts on top, it's a great tool for managing data workflows. At this time I've been using it a lot in order to:
          </p>
          <ul>
            <li>Automate data transformation tasks</li>
            <li>Reliably prepare and distribute monthly reports</li>
            <li>Monitor and alert on data quality issues</li>
          </ul>
        </div>
      </Page>

      <Page title="Freelance development">
        <p>
          Working in a freelance capacity, not being bound by constraints of a single company, I've had the opportunity to work
          on a variety of projects. But it also means I had to wear many hats each day. I have done everything from gathering
          requirements, designing, developing, testing, deploying, and maintaining. Doing it it all is not always easy, but it
          definitely teaches you your limits. ( For me it's <span className="d-inline-block"><TagList tags={["Accounting", "Marketing & Sales"]} /></span> )
        </p>
        <div className="grow" />
        <div className="example">
          <div className="example-title">
            <h4>Fullstack @ <span className="subheading">Blockchain game development</span> (2022 – 2023)</h4>
          </div>
          <TagList tags={["Frontend", "Backend", "Project management", "Game dev", "Blockchain", "UI design", "Services integration", "Ops", "Unity"]} />
          <p>
            I started my freelancing by developing small blockchain based products, later getting into bigger game projects.
          </p>
          <ul className="two-columns">
            <li>Smart contracts (Solidity)</li>
            <li>NFT collections</li>
            <li>Ethereum, Immutable X, Avalanche</li>
            <li>Blockchain-based gaming</li>
          </ul>
          <div className="grow" />
          <div className="example-title">
            <h4>
              Fullstack @ <span className="subheading">Tailored system development</span> (2023 – 2024)
            </h4>
          </div>
          <TagList tags={["Static websites", "Application", "Typescript", "Video streaming", "Adaptive learning", "User analytics", "Firebase", "Google Cloud Platform", "CDN", "UI design", "Ops", "Templating", "Processes automation"]} />
          <div className="col-8-4">
            <p className="mb-0">
              Afterwards I moved onto more traditional projects. Working on tailored systems for clients, there is one project in particular I would like to highlight.
            </p>
            <div className="text-right align-self-end">
              <a className="btn-source" href="#freelance-development-na-medicinu">Project details&nbsp;&nbsp;&nbsp;▷</a>
            </div> 
          </div>
        </div>
      </Page>

      <Page title="Freelance development" subtitle="Na medicínu" titleClassName="mb-0">
        <p>
          One project in particular I would like to highlight is a set of services that I developed for study course <a href="https://namedicinu.cz">Na medicínu</a>.
        </p>
        <div className="example">
          <div className="example-title">
            <h4>Na medicínu (2024)</h4>
          </div>
          <p>
            Study course for students preparing for entrance exams to medical schools. It consists of several parts:
          </p>
          <div className="col-8-4">
            <ul className="deep">
              <li>
                <p className="mb-1">♣️ Public websites</p>
                <ul className="two-columns">
                  <li>Static ecommerece website</li>
                  <li>To bring new people in</li>
                </ul>
              </li>
              <li>
                <p className="mb-1">♥️ Internal system for students and lectors</p>
                <ul className="two-columns">
                  <li>Helping students learn</li>
                  <li>Empowering lectors</li>
                  <li>Video streaming platform</li>
                  <li>Analysis of progress</li>
                  <li>Adaptive learning quizzes</li>
                </ul>
              </li>
              <li>
                <p className="mb-1">♠️ Admin backend</p>
                <ul className="two-columns">
                  <li>User access control</li>
                  <li>Roles and permissions</li>
                  <li>Content management</li>
                  <li>Website content editor</li>
                </ul>
              </li>
              <li>
                <p className="mb-1">♦️ Processes automation and email generator</p>
                <ul>
                  <li>Registration workflow</li>
                  <li>Tools for exporting data for accounting</li>
                </ul>
              </li>
            </ul>
            <div className="d-flex flex-column justify-space-around">
              <p>
                <LightboxButton path="namedicinu-1.jpg" alt="Na medicínu - Public website" buttonClassName="screenshot-border" />
              </p>
              <p>
                <LightboxButton path="namedicinu-2.jpg" alt="Na medicínu - Video lectures" buttonClassName="screenshot-border" />
              </p>
              <p>
                <LightboxButton path="namedicinu-3.jpg" alt="Na medicínu - Admin" buttonClassName="screenshot-border" />
              </p>
            </div>
          </div>
        </div>
      </Page>

      <Page title="Education" subtitle="Masaryk University - Bc." titleClassName="mb-0">
        <div className="grow" />
        <div className="example-bar">
          <div className="example-title">
            <h4>
              <a href="https://is.muni.cz/obory/8143?lang=en">Computer Systems and Data Processing</a> (2015 – 2018)
            </h4>
          </div>
          <TagList tags={["Applications", "Python", "Database management", "Java", "C++", "Algorithms", "Computational theory", "Data science", "Computer graphics"]} />
          <p>
            Teached me architectures, principles and methods of designing integrated systems and data processing
          </p>
        </div>
        <div className="example thesis-note">
          <h5>
            <span>Bc. Thesis: </span>
            Techniques for measuring similarity of educational items
          </h5>
          <p>
            Focuses on measuring of item similarity of questions from an adaptive tutoring systems utilizing correctness of answers from students.
          </p>
          <p className="text-center">
            <LightboxButton path="thesis-bc.png" alt="Bc. Thesis: Techniques for measuring similarity of educational items" buttonClassName="w-50" />
          </p>
          <p className="text-right">
            <a className="btn-source" href="https://ienze.me/tmsei_thesis/">§ TLDR version</a>
            <a className="btn-source" href="https://is.muni.cz/th/l5dzj/gmiterko-similarity.pdf">§ Read full text</a>
          </p>
        </div>
      </Page>

      <Page title="Education" subtitle="Masaryk University - Mgr." titleClassName="mb-0">
        <div className="grow" />
        <div className="example-bar">
          <div className="example-title">
            <h4>
              <a href="https://is.muni.cz/program/22961/artificial%20intelligence%20and%20data%20processing">Artificial intelligence and data processing</a> (2018 – 2020)
            </h4>
          </div>
          <TagList tags={["Machine learning", "Cloud development", "AI", "Data analysis", "Statistics", "Big data", "Data processing", "Data science", "Neural networks", "Visualization", "Constraint programming"]} />
          <p>
            Focused on design and development of intelligent systems and analysis of big data, using machine learning and artificial intelligence.
          </p>
        </div>
        <div className="example thesis-note">
          <h5>
            <span>Mgr. Thesis: </span>
            Tool Supporting Analysis of Meteorology Data
          </h5>
          <p>
            A newly built system allowin users to process and validate meteorological data while enhancing the analytical capabilities on the resulting dataset.
          </p>
          <p className="text-center">
            <LightboxButton path="thesis-mgr.png" alt="Mgr. Thesis: Tool Supporting Analysis of Meteorology Data" buttonClassName="w-50" />
          </p>
          <p className="text-right">
            <a className="btn-source" href="https://is.muni.cz/th/vaev3/tool-supporting-analysis-of-meteorology-data.pdf">§ Read full text</a>
          </p>
        </div>
      </Page>

      <ReferencesPage references={["linkedin", "github"]} />

    </Book>
  )
}

export default SlidesProfessional;

/*

Oh, yeah, I've also worked in professional capacity.
But those are more difficult to share as they are often non-public and non-visual.

$ Story $
All the stuff you can find out about me easily, neat.
  - twist: No job I've ever had used all of my skills.
    - visualization: Tag bubbles
  - tags not used yet at the last slide with the "hire me" theme

[1.] Website development
- Wame [Backnd developer] ()
- InQool [Frontend developer] ()

[2.] Product development
- Kiwi [Data Engineer]
- Freelance development [-]
  - BB: blockchain game product engineering

    
  - Namedicinu: 

[3.] Education
- Masaryk University
  - Bc. Data Science thingy
   https://github.com/dee-gmiterko/tmsei_short_version/blob/master/index.md
  - Mgr. Artificial Intelligence

[4.] Open Source
- [Github] 
[Next]
"Hire me": Us, cooperating.
  - $-linkedIn-$
  - $-purpose led contact-$

$ Conclusion $
  No job I've ever had used all of my skills.
  tags not used yet at the last slide with the "hire me" theme


*/