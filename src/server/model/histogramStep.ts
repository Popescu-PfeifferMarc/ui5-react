/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Maintenance Insights Service
 * Maintenance Insighs Service provides analytical insights about maintenance events
 * OpenAPI spec version: 1.0.0
 */

/**
 * The amount of time in seconds which one bin should be made of.
This argument is alternative to _bins_ (only one is allowed)
If specified, number of bins is calculated by dividing whole range by the given
width of a step.

 */
export type HistogramStep = number;