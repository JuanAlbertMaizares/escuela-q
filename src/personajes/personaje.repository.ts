import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personaje } from './personaje.entity';

@Injectable()
export class PersonajeRepository {
  constructor(
    @InjectRepository(Personaje)
    private readonly repo: Repository<Personaje>,
  ) {}

  async crear(data: Partial<Personaje>): Promise<Personaje> {
    const personaje = this.repo.create(data);
    return this.repo.save(personaje);
  }

  async findAll(): Promise<Personaje[]> {
    return this.repo.find();
  }

  async findById(id: string): Promise<Personaje | null> {
    return this.repo.findOneBy({ id });
  }

  async actualizar(id: string, data: Partial<Personaje>): Promise<Personaje | null> {
    await this.repo.update(id, data);
    return this.findById(id);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}