import { title } from "./datascience_project";
import { Content } from "./datascience_project";

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
console.log(ProjectminorMajors);

export default ProjectminorMajors;
