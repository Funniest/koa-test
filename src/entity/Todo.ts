import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User"

@Entity()
export class Todo extends BaseEntity {
    @PrimaryGeneratedColumn({type : "bigint" })
    id! : number;

    @OneToOne(type => User, data => data.id)
    @JoinColumn()
    user!: User;

    @Column({type: "varchar", length: 5000, nullable: false})
    context!: string;

    @Column({type: "date", nullable: false, default: () => 'current_timestamp'})
    date! : Date;
}