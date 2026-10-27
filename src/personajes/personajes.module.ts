import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personaje } from './personaje.entity';
import { PersonajeRepository } from './personaje.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Personaje])],
  providers: [PersonajeRepository],
  exports: [PersonajeRepository],
})
export class PersonajesModule {}