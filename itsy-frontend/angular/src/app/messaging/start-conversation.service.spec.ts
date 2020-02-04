import { TestBed } from '@angular/core/testing';

import { StartConversationService } from './start-conversation.service';

fdescribe('StartConversationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartConversationService = TestBed.get(StartConversationService);
    expect(service).toBeTruthy();
  });
});
