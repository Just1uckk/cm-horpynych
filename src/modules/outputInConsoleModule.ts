import { OutputService } from '../services/outputService';

export async function outputInConsoleModule(commission) {
  OutputService.outputInConsole(commission);
}
