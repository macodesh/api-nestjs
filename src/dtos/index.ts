import { IsNotEmpty, Length } from 'class-validator'

export class TeamMemberBody {
  @IsNotEmpty({
    message: 'Name should not be empty',
  })
  @Length(3, 100)
  name: string

  @IsNotEmpty()
  jobFunction: string
}
