import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Member from "./members.entity";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    userName: string
    @Column()
    password: string
    @Column()
    level: number
    @Column()
    memberId: string
    @OneToOne(() => Member, (Member) => Member.user)
    @JoinColumn()
    member: Member
}