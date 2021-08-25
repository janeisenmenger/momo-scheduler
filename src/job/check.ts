import { ExecutionInfo } from './ExecutionInfo';
import { getJobRepository } from '../repository/getRepository';

/**
 * Retrieves execution information about the job from the database. Returns undefined if the job cannot be found or was never executed.
 *
 * @param name the job to check
 */
export async function check(name: string): Promise<ExecutionInfo | undefined> {
  const job = await getJobRepository().findOne({ name });
  return job?.executionInfo;
}
