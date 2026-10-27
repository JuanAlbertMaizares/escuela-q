import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PersonajeRepository } from './personajes/personaje.repository';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const repo = app.get(PersonajeRepository);

  // CREATE
  console.log('--- Creando personajes ---');
  const kyu = await repo.crear({ nombre: 'Kyu Renjou', edad: 14, habilidad: 'Razonamiento analítico', seccion: 'Q' });
  const megu = await repo.crear({ nombre: 'Megumi Minami', edad: 14, habilidad: 'Memoria fotográfica', seccion: 'Q' });
  console.log('Creados:', kyu, megu);

  // READ
  console.log('--- Todos los personajes ---');
  console.log(await repo.findAll());

  // UPDATE
  console.log('--- Actualizando habilidad de Kyu ---');
  await repo.actualizar(kyu.id, { habilidad: 'Razonamiento analítico avanzado' });
  console.log(await repo.findById(kyu.id));

  // DELETE
  console.log('--- Eliminando a Megu ---');
  await repo.eliminar(megu.id);
  console.log('Quedan:', await repo.findAll());

  await app.close();
}

bootstrap();