import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Investor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  inviteToken: string;

  @Column()
  tgChatId: number;

  @Column()
  tgUsername: string;

  @Column()
  ratio: number;
}
