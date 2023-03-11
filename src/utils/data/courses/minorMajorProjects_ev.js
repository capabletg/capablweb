import { title } from "./evproject";
import { Content } from "./evproject";

const ProjectminorMajors = [];

title.forEach((title, index) => {
  ProjectminorMajors.push({
    title: title,
    content: {
      project_title: title,
      project_description: Content[index],
    },
  });
});

export default ProjectminorMajors;
