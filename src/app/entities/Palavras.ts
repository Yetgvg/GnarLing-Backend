import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { Idiomas } from './Idiomas';

@Entity()
export class Palavras extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  palavra: string;

  @ManyToOne(() => Idiomas)
  @JoinColumn({ name: 'idioma_id' })
  idioma: Idiomas;
}