import { DemoEntity } from '../../entities/DemoEntity'

export interface DemoRepository {
  getDemoText(): DemoEntity
}
