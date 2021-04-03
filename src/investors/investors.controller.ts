import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Investor } from './entities/investor.entity';
import { InvestorsService } from './investors.service';

@Crud({
  model: {
    type: Investor,
  },
})
@Controller('investors')
export class InvestorsController {
  constructor(public service: InvestorsService) {}
}
