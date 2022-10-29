import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Container } from "reactstrap";
import SiteLayout from "../components/SiteLayout";
import IndexPage from "../pageComponents/IndexPage";
import { useTasks } from "../context_providers/TasksProvider";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }
  // }

  return (
    <Container fluid>
      <SiteLayout title="HOME" />
      <IndexPage />
    </Container>
  );
}

export default App;
