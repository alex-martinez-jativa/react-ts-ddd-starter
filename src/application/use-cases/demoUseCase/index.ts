import { DemoRepositoryImpl } from '../../../infrastructure/repositories/demoRepositoryImpl'

export class DemoUseCase {
  demoRepository: DemoRepositoryImpl

  constructor() {
    this.demoRepository = new DemoRepositoryImpl()
  }

  execute() {
    return this.demoRepository.getDemoText()
  }
}
