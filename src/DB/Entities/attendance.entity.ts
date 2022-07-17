import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class attendanceEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    counter: string
    @Column({
        type:"int"
    })
    total: number
    @Column({
        type:'date'
    })
    date: Date
}