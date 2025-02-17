'use strict';
import {
  APIGatewayProxyEvent,
  APIGatewayEventRequestContext,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { describe, expect, it } from '@jest/globals';
const eventStub: APIGatewayProxyEvent = require('../../../events/event.json');

const app = require('../../app.ts');
var context: APIGatewayEventRequestContext;

describe('Tests index', function () {
  it('verifies successful response', async () => {
    const result: APIGatewayProxyResult = await app.lambdaHandler(
      eventStub,
      context
    );
    expect(result.statusCode).toBe(200);

    let response = JSON.parse(result.body);
    expect(JSON.parse(response.message).message).toBe('hello world');
  });
});
