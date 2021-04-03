import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Investor } from './entities/investor.entity';

@Injectable()
export class InvestorsService extends TypeOrmCrudService<Investor> {
  constructor(@InjectRepository(Investor) repo) {
    super(repo);
  }
}
