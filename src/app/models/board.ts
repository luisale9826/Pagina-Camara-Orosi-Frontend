import { Director } from './director';

export class Board {
  constructor(
    public president: Director,
    public vicepresident: Director,
    public secretary: Director,
    public treasurer: Director,
    public vocal: Director,
    public fiscal: Director
  ) {}
}
