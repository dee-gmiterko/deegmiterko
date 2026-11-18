import { ChatMessage, Slide } from "../types";

export type BookContent = {
  id: Slide;
  title: string;
  pre: ChatMessage[];
  after: ChatMessage[];
};

export const introduction: ChatMessage[] = [
  { author: "Me", message: "Hello" },
  { author: "You", message: "Hi" },
  {
    author: "Me",
    message: "I assume you would want to learn some bits about me",
  },
  { author: "Me", message: "Where does one start?" },
  { author: "You", message: "I would start with the latest big project?" },
];

export const books: BookContent[] = [
  {
    id: Slide.Styloma,
    title: "Styloma",
    pre: [
      { title: "Styloma" },
      { author: "Me", message: "Sure, let me tell you about it…" },
    ],
    after: [
      { author: "You", message: "Huh, and how is it going?" },
      { author: "Me", message: "We will have to see…" },
      {
        author: "Me",
        message:
          "But for now I could tell you a bit more about myself. For starters, I've always been an artist. One way or another.",
      },
    ],
  },
  {
    id: Slide.Artful,
    title: "Art",
    pre: [
      { title: "Artist" },
      { author: "You", message: "What kind of art do you do?" },
      {
        author: "Me",
        message:
          "I just enjoy creating. And you can find some sort of artistry in many things.",
      },
    ],
    after: [
      {
        author: "You",
        message:
          "Have you noticed how the media changes, but the intent persists?",
      },
      {
        author: "Me",
        message:
          "Yes, every new age may have added new tools to the mix, but the core message remains the same.",
      },
      { author: "You", message: "<Unity over ideas keeps popping up, huh?>" },
    ],
  },
  {
    id: Slide.GenerativeDesign,
    title: "Generative design",
    pre: [
      { title: "Tie-in of art and tech" },
      {
        author: "Me",
        message:
          "Actually, there is one expression method in particular I would like to discuss",
      },
      { author: "You", message: "What is it?" },
      {
        author: "Me",
        message: 'It\'s usually referred to as a "Generative design"',
      },
    ],
    after: [
      {
        author: "You",
        message:
          "Isn't it fascinating how simple components can create such complex behavior, right?",
      },
      { author: "Me", message: "Absolutely!" },
      {
        author: "Me",
        message:
          "And as opposed to the traditional top-down design, generative design builds up from the bottom, creating virtually unbounded possibilities.",
      },
      {
        author: "You",
        message: "The biggest issue then is keeping it varied and interesting",
      },
      { author: "You", message: "<And for it to have a point>" },
    ],
  },
  {
    id: Slide.GameExperiments,
    title: "Games",
    pre: [
      { title: "Experiments and games" },
      { author: "Me", message: "Now we are missing two key components:" },
      { author: "Me", message: "To come up with completely new things" },
      { author: "You", message: "And having a reason to use them..." },
      {
        author: "Me",
        message: "...which is most likely going to be to tell a story.",
      },
    ],
    after: [
      {
        author: "Me",
        message:
          "Only once we find that something works, we can start to build on top of it.",
      },
      { author: "You", message: "<I think that's actually very clever.>" },
      {
        author: "Me",
        message: "And use it in a way that is commercially viable.",
      },
      { author: "You", message: "<Sadly>" },
    ],
  },
  {
    id: Slide.Professional,
    title: "Professional",
    pre: [
      { title: "Professional experience" },
      {
        author: "Me",
        message: "Which is where my professional experience comes in.",
      },
      { author: "You", message: "Yes. What have you worked on before?" },
    ],
    after: [
      {
        author: "Me",
        message:
          "Given, those are much more difficult to share beyond listing it, as they are often non-public and non-visual.",
      },
      { author: "You", message: "Yes, I do get that." },
      {
        author: "Me",
        message:
          "I still hope you gained some insight into what I did and what could be in my capabilities.",
      },
    ],
  },
  {
    id: Slide.Me,
    title: "Me",
    pre: [
      { title: "Dee Gmiterko" },
      { author: "Me", message: "And then, there is *me*" },
      { author: "You", message: "Nice to meet *you*" },
    ],
    after: [
      {
        author: "Me",
        message: "It's still too early to say how it all ends up...",
      },
      { author: "You", message: "See you then!" },
    ],
  },
];

export const bookPath = (id: string) => `/${id}/`;
