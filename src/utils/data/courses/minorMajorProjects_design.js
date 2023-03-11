import { title } from "./design_project";
import { Content } from "./design_project";

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
