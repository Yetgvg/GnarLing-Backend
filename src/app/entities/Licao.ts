import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { Idiomas } from './Idioma';

@Entity()
export class Licoes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Idiomas)
  @JoinColumn({ name: 'idioma_id' })
  idioma: Idiomas;

  @Column({ length: 255 })
  questao: string;

  @Column()
  tipo: number;

  @Column({ type: 'text' })
  resposta: string;
}