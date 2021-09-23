import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const checkUserNonExists = this.usersRepository.findById(user_id);
    if (!checkUserNonExists) {
      throw new Error("User Non Exists");
    }

    const user = this.usersRepository.turnAdmin(checkUserNonExists);
    return user;
  }
}

export { TurnUserAdminUseCase };
