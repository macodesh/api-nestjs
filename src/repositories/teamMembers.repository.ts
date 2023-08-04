export abstract class TeamMembersRepository {
  abstract create(name: string, jobFunction: string): Promise<void>
}
