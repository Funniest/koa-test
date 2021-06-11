import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type : "bigint" })
    index!: number;

    @Column({type: "varchar", length: 32, nullable:false})
    id!: string;

    @Column({type: "varchar", length: 1024, nullable: false})
    password!: string;

    @Column({type: "varchar", length:32, nullable: false})
    nickname!: string;
}
