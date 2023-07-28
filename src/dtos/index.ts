import { IsNotEmpty, Length } from 'class-validator';

export class TeamMemberBody {
  @IsNotEmpty({
    // Mensagem de erro personalizada se a validação falhar.
    message: 'Name should not be empty',
  })
  // Define um limite mínimo e máximo de caracteres para a propriedade "name".
  @Length(3, 100)
  name: string;

  // Garante que a propriedade "jobFunction" não esteja vazia.
  @IsNotEmpty()
  jobFunction: string;
}
