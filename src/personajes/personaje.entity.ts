import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('personajes')
export class Personaje {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ type: 'int' })
  edad: number;

  @Column({ type: 'text', nullable: true })
  habilidad: string;

  @Column({ length: 50, default: 'Q' })
  seccion: string;
}