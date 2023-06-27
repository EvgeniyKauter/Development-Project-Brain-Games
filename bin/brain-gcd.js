#!/usr/bin/env node
import { askQuestion, makelogic } from '../src/games/gameGcd.js';
import gameEngine from '../src/index.js';

gameEngine(askQuestion, makelogic);
