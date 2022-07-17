import { IsDate, IsEmail } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Contact from "./contact.entity";
import User from "./users.entity";

@Entity()
export default class Members{
  @PrimaryColumn()
  id: string
  @Column({nullable:false})
  firstName: string
  @Column()
  lastName: string
  @Column()
  gender: string
  @CreateDateColumn()
  @IsDate()
  dob: Date 
  @OneToOne(()=> Contact,(contact)=> contact.member)
  contact: Contact
  @OneToOne(()=> User,(User)=> User.member)
  user: User
}
