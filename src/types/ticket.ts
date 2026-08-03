export type Priority = "All" | "High" | "Medium" | "Low";

export interface Ticket {
  id: number;
  title: string;
  category: string;
  priority: Exclude<Priority, "All">;
}

export interface FilterState {
  searchTerm: string;
  selectedPriority: Priority;
}
