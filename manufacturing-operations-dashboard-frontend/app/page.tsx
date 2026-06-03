import { redirect } from "next/navigation";

export default function RootPage() {
  // In a real app, logic would check for a session here.
  // For now, we redirect to the login page.
  redirect("/login");
}