#!/usr/bin/env node
import { printNameOfTheGame, askQuestion, makelogic } from '../src/games/gameGcd.js';
import gameEngine from '../src/index.js';

gameEngine(printNameOfTheGame, askQuestion, makelogic);
