import { TextEncoder, TextDecoder } from 'util';

// Polyfill for TextEncoder and TextDecoder for the Jest environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
