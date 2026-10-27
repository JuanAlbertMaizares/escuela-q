import { MigrationInterface, QueryRunner } from "typeorm";

export class CrearPersonajes1793133043503 implements MigrationInterface {
    name = 'CrearPersonajes1793133043503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "personajes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nombre" character varying(100) NOT NULL, "edad" integer NOT NULL, "habilidad" text, "seccion" character varying(50) NOT NULL DEFAULT 'Q', CONSTRAINT "PK_c0a2e570551c0cc4297e699e937" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "personajes"`);
    }

}
