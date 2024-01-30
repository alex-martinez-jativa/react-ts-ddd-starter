import { DemoEntity } from '../../../domain/entities/DemoEntity'
import { DemoRepository } from '../../../domain/respositories/DemoRepositoryInterface'

export class DemoRepositoryImpl implements DemoRepository {
  getDemoText(): DemoEntity {
    return { text: 'Demo Text' }
  }
}
