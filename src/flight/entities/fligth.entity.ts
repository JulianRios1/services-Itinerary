import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  idVuelo: string;

  @Column()
  tipoVuelo: string;

  @Column()
  observaciones: string;

  @Column()
  estadoVuelo: string;

  @Column()
  cantidadTripulantes: number;

  @Column('decimal')
  pesoCarga: number;

  @Column()
  cantidadPasajeros: number;

  @Column()
  fechaSalida: Date;

  @Column()
  rutaVouchers: string;

  @Column()
  rutaAprobacionAerocivil: string;

  @Column()
  destino: string;
}