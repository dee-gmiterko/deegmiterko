import React, { FunctionComponent } from "react";
import Book from "../Book";
import ReferencesPage from "../ReferencesPage";
import TitlePage from "../TitlePage";
import Page from "../Page";
import LightboxButton from "../LightboxButton";
import { ThumbnailNode } from "../../pages/index";

const SlidesMe: FunctionComponent<{ thumbnails: ThumbnailNode[] }> = ({
  thumbnails,
}) => {
  return (
    <Book bookId="me" thumbnails={thumbnails}>
      <TitlePage
        title="Me"
        subtitle="Coder | Artist | Me"
        titleClassName="bigger"
        lecture={6}
      >
        <p>"Top 10 places where to find me"</p>
      </TitlePage>

      <Page
        title="Heading to nature"
        titleNode={
          <div className="order-2">
            <h3>Heading to nature</h3>
            <ul>
              <li>Hiking</li>
              <li>Working from forest</li>
              <li>Traveling</li>
            </ul>
          </div>
        }
        className="four-squares"
      >
        <LightboxButton
          path="me/k1.jpg"
          alt="Working from nature"
          buttonClassName="order-1"
        />
        <LightboxButton
          path="me/k2.jpg"
          alt="Hiking"
          buttonClassName="order-3"
        />
        <LightboxButton
          path="me/k3.jpg"
          alt="Traveling"
          buttonClassName="order-4"
        />
      </Page>

      <Page
        title="It's cooler with people"
        titleNode={
          <div className="order-1">
            <h3>It's cooler with people</h3>
            <ul>
              <li>Concerts</li>
              <li>Cafes & tea houses</li>
              <li>Festivals</li>
            </ul>
          </div>
        }
        className="four-squares"
      >
        <LightboxButton
          path="me/l1.jpg"
          alt="Concerts"
          buttonClassName="order-2"
        />
        <LightboxButton
          path="me/l2.jpg"
          alt="Cafes & tea houses"
          buttonClassName="order-3"
        />
        <LightboxButton
          path="me/l3.jpg"
          alt="Festivals"
          buttonClassName="order-4"
        />
      </Page>

      <Page
        title="Having fun solving problems"
        titleNode={
          <div className="order-3">
            <h3>Having fun solving problems</h3>
            <ul>
              <li>Board games</li>
              <li>Puzzle races</li>
            </ul>
          </div>
        }
        className="four-squares"
      >
        <LightboxButton
          path="me/t1.jpg"
          alt="Board games"
          buttonClassName="order-1"
        />
        <LightboxButton
          path="me/t2.jpg"
          alt="Puzzle races"
          buttonClassName="order-2"
        />
        <LightboxButton
          path="me/t3.jpg"
          alt="Drawing diagrams"
          buttonClassName="order-4"
        />
      </Page>

      <Page
        title="Givigng life it's fullest"
        titleNode={
          <div className="order-4">
            <h3>Givigng life it's fullest</h3>
            <ul>
              <li>Cooking</li>
              <li>Urbex places</li>
            </ul>
          </div>
        }
        className="four-squares"
      >
        <LightboxButton
          path="me/g1.jpg"
          alt="Cooking"
          buttonClassName="order-1"
        />
        <LightboxButton
          path="me/g2.jpg"
          alt="Urbex"
          buttonClassName="order-2"
        />
        <LightboxButton
          path="me/g3.jpg"
          alt="Pride"
          buttonClassName="order-3"
        />
      </Page>

      <ReferencesPage references={["instagram", "contact"]} />
    </Book>
  );
};

export default SlidesMe;
