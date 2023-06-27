#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { printNameOfTheGame, askQuestion, makelogic } from '../src/games/gameProgression.js';

gameEngine(printNameOfTheGame, askQuestion, makelogic);
