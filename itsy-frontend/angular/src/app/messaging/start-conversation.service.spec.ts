import { TestBed } from '@angular/core/testing';

import { StartConversationService } from './start-conversation.service';

describe('StartConversationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartConversationService = TestBed.get(StartConversationService);
    expect(service).toBeTruthy();
  });
});
