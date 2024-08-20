import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    console.log("Button clicked");
    setProjectState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prev) => {
      const newProject = {
        ...projectData,
        id: uuidv4(),
      };
      return {
        ...prev,
        project: [...prev.projects, newProject],
      };
    });
    console.log(projectState);
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
