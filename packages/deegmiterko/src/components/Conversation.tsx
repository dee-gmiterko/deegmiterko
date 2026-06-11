import React from "react";

import Message from "./Message";
import useApp from "../hooks/useApp";
import { ChatMessage, ContentImages } from "../types";

interface Props {
  messages: ChatMessage[] | null | undefined;
  contentImages?: ContentImages;
}

const Conversation = ({ messages, contentImages }: Props) => {
  const { bookPageSize } = useApp();

  if (!messages) {
    return;
  }

  let i = 0;
  let si = 0;
  const messageCount = messages.length;
  const sequences: React.ReactNode[] = [];
  let currentSequence: React.ReactNode[] = [];

  const endSequence = (titleSequence: boolean, mine: boolean | undefined) => {
    if (!currentSequence.length) {
      return;
    }
    if (titleSequence) {
      sequences.push(
        <div key={si} className="title-sequence">
          <div className="sequence-messages">{currentSequence}</div>
        </div>,
      );
    } else {
      sequences.push(
        <div key={si} className={mine ? "sequence mine" : "sequence"}>
          <div className="sequence-messages">{currentSequence}</div>
        </div>,
      );
    }
    si += 1;
    currentSequence = [];
  };

  while (i < messageCount) {
    const previous = messages[i - 1];
    const current = messages[i];

    if (previous) {
      if (
        previous.author !== current.author ||
        current.website ||
        current.media
      ) {
        endSequence(false, previous.author === "Me");
      }
    }

    if (current.title) {
      endSequence(false, previous && previous.author === "Me");
    }

    currentSequence.push(
      <Message key={i} data={current} contentImages={contentImages} />,
    );

    if (current.title) {
      endSequence(true, undefined);
    }
    if (current.website || current.media) {
      endSequence(false, previous && previous.author === "Me");
    }

    i += 1;
  }

  endSequence(false, messages[messageCount - 1].author === "Me");

  return (
    <div className="conversation" style={{ maxWidth: bookPageSize }}>
      {sequences}
    </div>
  );
};

export default Conversation;
