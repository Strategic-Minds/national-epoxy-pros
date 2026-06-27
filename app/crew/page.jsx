import { DashboardShell, OpsDashboardContent } from "../components";
import { dashboardMetrics } from "@/lib/data";

export default function CrewPage() {
  return (
    <DashboardShell role="crew leader" title="Crew Leader Dashboard">
      <OpsDashboardContent metrics={dashboardMetrics.crew} title="Today Job Details" />
    </DashboardShell>
  );
}
