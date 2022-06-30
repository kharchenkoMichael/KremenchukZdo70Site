import { JobTitleItemResponse } from './job-title-item-response';

export class CollectiveItemResponse {
  id: number = 0;
  firstName: string | undefined;
  secondName: string | undefined;
  lastName: string | undefined;
  smallProfileUrl: string | undefined;
  fullProfileUrl: string | undefined;
  jobTitles: JobTitleItemResponse[] | undefined;
}
