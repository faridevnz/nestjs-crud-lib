import { Test, TestingModule } from '@nestjs/testing';
import { RestLibService } from './rest-lib.service';

describe('RestLibService', () => {
  let service: RestLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestLibService],
    }).compile();

    service = module.get<RestLibService>(RestLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
