// -----------------------------------------------------------------------------
// isNil
// This snippet can be used to check whether a value is null or undefined.
// 
// isNil(null); // true
// isNil(undefined); // true

export const isNil = val => val === undefined || val === null;