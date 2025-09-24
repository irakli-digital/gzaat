import { redirect } from "next/navigation";

export default function CommunityPage() {
  // Merge Community into Student Life
  redirect("/student-life");
}
