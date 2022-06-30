import { JobTitleItemResponse } from './job-title-item-response';

export class EmployeeRequest {
  id: number = 0;
  firstName: string | undefined;
  secondName: string | undefined;
  lastName: string | undefined;
  smallProfileUrl: string | undefined;
  fullProfileUrl: string | undefined;
}
