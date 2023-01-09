/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Maintenance Insights Service
 * Maintenance Insighs Service provides analytical insights about maintenance events
 * OpenAPI spec version: 1.0.0
 */
import type { FilterExpression } from './filterExpression';
import type { HistogramBins } from './histogramBins';
import type { HistogramStep } from './histogramStep';

export type MisApiElementsHistogramGetElementsHistogramParams = {
	filter?: FilterExpression;
	bins?: HistogramBins;
	step_width?: HistogramStep;
};