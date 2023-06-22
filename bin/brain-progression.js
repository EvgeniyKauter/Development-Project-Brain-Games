#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { nameOfTheGame, theQuestion, logicOfTheGame } from '../src/games/game-progression.js';

gameEngine(nameOfTheGame, theQuestion, logicOfTheGame);
