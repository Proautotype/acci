import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class MgnlCompanyEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    email: string
    @Column()
    tell: string
}