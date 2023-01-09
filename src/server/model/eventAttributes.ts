/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Maintenance Insights Service
 * Maintenance Insighs Service provides analytical insights about maintenance events
 * OpenAPI spec version: 1.0.0
 */
import type { PermanentSystemInformation } from './permanentSystemInformation';
import type { VolatileSystemInformation } from './volatileSystemInformation';

/**
 * Event Attributes
 */
export interface EventAttributes {
	permanentSystemInformation?: PermanentSystemInformation;
	volatileSystemInformation?: VolatileSystemInformation[];
}