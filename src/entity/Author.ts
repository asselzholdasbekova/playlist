import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Song } from "./Song";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @OneToMany(
		() => Song,
		(song) => song.author
	)
    songs: Song[]
}