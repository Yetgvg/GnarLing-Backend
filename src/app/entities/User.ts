import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToOne, JoinColumn } from "typeorm";
import { Idiomas } from "./Idiomas";

@Entity('users')
@Unique(["email"])
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    nome: string;

    @Column({ length: 255 })
    email: string;

    @Column({ length: 255 })
    senha: string;

    @ManyToOne(() => Idiomas)
    @JoinColumn({ name: "idioma_nativo_id" })
    idioma_nativo_id: Idiomas;

    @ManyToOne(() => Idiomas)
    @JoinColumn({ name: "idioma_aprendendo_id" })
    idioma_aprendendo_id?: Idiomas;

    @Column({ type: 'json', nullable: true })
    progresso?: any;
}