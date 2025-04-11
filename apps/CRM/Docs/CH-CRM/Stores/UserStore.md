### Synopsis
Stores additional information related to the user and is closely linked to the [[AuthStore]] processes

### Interface
interface UserProfile {
  uid: string;
  email: string;
  role: string;
  displayName: string;
  firstname: string;
  lastname: string;
  mobile?: string;

  address?: {
    street?: string;
    city?: string;
    postcode?: string
    country?: string;
  };
  createdAt: Date;
}
### State
allRecords
currentRecord

### Actions
createRecord
readRecord
updateRecord
deleteRecord
### Getters