import { IsString } from 'class-validator';
import { EnvironmentWithUserCommand } from '../../../shared/commands/project.command';

export class GetNotificationGroupCommand extends EnvironmentWithUserCommand {
  @IsString()
  id: string;
}
