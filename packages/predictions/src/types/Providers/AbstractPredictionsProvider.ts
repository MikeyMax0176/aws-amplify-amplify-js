// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { PredictionsOptions } from '..';
import { ConsoleLogger as Logger } from '@aws-amplify/core';

const logger = new Logger('Amplify');

export abstract class AbstractPredictionsProvider {
	protected _config: PredictionsOptions;

	configure(config: PredictionsOptions) {
		logger.debug('configure AbstractPredictionsProvider', { config });
		this._config = config;
		return config;
	}

	abstract getProviderName(): string;

	abstract getCategory(): string;
}
