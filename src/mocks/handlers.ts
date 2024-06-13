import { http, HttpResponse } from 'msw';

// dummy implementation for testing purposes, to be replaced with actual handlers
export const handlers = [
  http.get(
    '/api/mock',
    () => HttpResponse.json({
      test: 'test'
    })
  ),
];
