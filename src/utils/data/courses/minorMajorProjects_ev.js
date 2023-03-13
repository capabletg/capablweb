import { title, Software, Industry, Skills } from "./evproject";
import { Content } from "./evproject";

const ProjectminorMajors = [];

title.forEach((title, index) => {
  ProjectminorMajors.push({
    title: title,
    content: {
      project_title: title,
      project_description: Content[index],
      project_Softwares: Software[index],
      project_Industry: Industry[index],
      project_Skills: Skills[index],
    },
  });
});

export default ProjectminorMajors;
