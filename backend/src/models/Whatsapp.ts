import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Default,
  AllowNull,
  HasMany,
  Unique,
  ForeignKey,
  BelongsTo
  // DefaultScope
} from "sequelize-typescript";
import Tenant from "./Tenant";
import Ticket from "./Ticket";

// @DefaultScope(() => ({
//   where: { isDeleted: false }
// }))
@Table
class Whatsapp extends Model<Whatsapp> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull
  @Unique
  @Column(DataType.TEXT)
  name: string;

  @Column(DataType.TEXT)
  session: string;

  @Column(DataType.TEXT)
  qrcode: string;

  @Column
  status: string;

  @Column
  battery: string;

  @Column
  plugged: boolean;

  @Default(false)
  @Column
  isDeleted: boolean;

  @Column
  retries: number;

  @Default(false)
  @AllowNull
  @Column
  isDefault: boolean;

  @Default(null)
  @AllowNull
  @Column
  tokenTelegram: string;

  @Default("w")
  @Column(DataType.ENUM("w", "t"))
  type: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column
  number: string;

  @Column(DataType.JSONB)
  // eslint-disable-next-line @typescript-eslint/ban-types
  phone: object;

  @HasMany(() => Ticket)
  tickets: Ticket[];

  @ForeignKey(() => Tenant)
  @Column
  tenantId: number;

  @BelongsTo(() => Tenant)
  tenant: Tenant;
}

export default Whatsapp;
