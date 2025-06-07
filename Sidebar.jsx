export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar-background text-sidebar-foreground p-4">
      <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
      <nav>
        <ul className="space-y-2">
          <li className="hover-scale">Dashboard</li>
          <li className="hover-scale">Settings</li>
          <li className="hover-scale">Profile</li>
        </ul>
      </nav>
    </aside>
  );
}