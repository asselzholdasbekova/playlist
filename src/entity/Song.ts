import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Author } from "./Author";
import { Genre } from "./Genre";

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(
		() => Author,
		(author) => author.songs,
		{
			onDelete: 'CASCADE',
		}
	)
	@JoinColumn({
		name: 'author_id',
	})
    author: Author

    @ManyToOne(
		() => Genre,
		(genre) => genre.songs,
		{
			onDelete: 'CASCADE',
		}
	)
	@JoinColumn({
		name: 'genre_id',
	})
    genre: Genre

    @Column({
		name: 'year_of_release'
	})
    yearOfRelease: number
}