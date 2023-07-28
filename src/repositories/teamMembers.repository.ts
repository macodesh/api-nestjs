// Classe abstrata que define um contrato para criação de membros da equipe.
export abstract class TeamMembersRepository {
  abstract create(name: string, jobFunction: string): Promise<void>;
}
