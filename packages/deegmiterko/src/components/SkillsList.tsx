import React, { FunctionComponent } from "react";

import TagList from "./TagList";

const SkillsList: FunctionComponent<{ skills: string[] }> = ({ skills }) => (
  <TagList tags={skills} className="page-skills" />
);

export default SkillsList;
