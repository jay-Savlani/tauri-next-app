import { Container } from "reactstrap";
import SiteLayout from "../components/SiteLayout";
import TasksPage from "../pageComponents/TasksPage";

function Tasks() {
  return (
    <Container fluid>
      <SiteLayout title="TASKS" />
      <TasksPage />
    </Container>
  );
}

export default Tasks;
