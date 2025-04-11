// /services/types/example.ts
import type { Store } from "pinia";
import type { Timestamp } from "firebase/firestore";

export interface ExampleRecord {
  id?: string;
  name: string;
  createdAt?: Timestamp;
}

export type ExampleStore = Store<
  "exampleStore",
  {
    storName: string;
    records: ExampleRecord[];
    currentRecord: ExampleRecord | null;
    readRecords: () => Promise<void>;
    readRecord: (id: string) => Promise<void>;
    createRecord: (data: Omit<ExampleRecord, "id">) => Promise<void>;
    updateRecord: (id: string, data: Partial<ExampleRecord>) => Promise<void>;
    deleteRecord: (id: string) => Promise<void>;
  },
  {},
  {}
>;

export type ExampleStoreFactory = () => ExampleStore;