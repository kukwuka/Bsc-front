import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Investor } from './entities/investor.entity';
import { InvestorsController } from './investors.controller';
import { InvestorsService } from './investors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Investor])],
  controllers: [InvestorsController],
  providers: [InvestorsService],
})
export class InvestorsModule {}
