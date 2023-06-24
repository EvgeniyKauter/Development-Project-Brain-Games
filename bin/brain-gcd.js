#!/usr/bin/env node
import { printNameOfTheGame, askQuestion, makelogic } from '../src/games/game-gcd.js';
import gameEngine from '../src/index.js';

gameEngine(printNameOfTheGame, askQuestion, makelogic);
