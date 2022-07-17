import { IsPhoneNumber } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Member from "./members.entity";

@Entity()
export default class Contact {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    email: string
    @Column()
    homeTown: string
    @Column()
    residence: string
    @Column()
    memberId: string
    @OneToOne(() => Member,(member)=> member.contact)
    @JoinColumn()
    member: Member
}
