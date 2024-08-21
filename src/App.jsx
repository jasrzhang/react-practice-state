import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { v4 as uuidv4 } from "uuid";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prev) => {
      const taskId = uuidv4();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(taskId) {
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((t) => t.id !== taskId),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prev) => {
      return { ...prev, selectedProjectId: null };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prev) => {
      return { ...prev, selectedProjectId: undefined };
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
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
    console.log(projectState);
  }

  function handleSelectProject(id) {
    setProjectState((prev) => {
      return { ...prev, selectedProjectId: id };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((p) => p.id !== id),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectState.tasks}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
