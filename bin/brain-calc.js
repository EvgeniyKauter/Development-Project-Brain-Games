#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { printNameOfTheGame, askQuestion, makelogic } from '../src/games/gameCalc.js';

gameEngine(printNameOfTheGame, askQuestion, makelogic);
