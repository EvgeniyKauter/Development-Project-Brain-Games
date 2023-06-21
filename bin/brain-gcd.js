#!/usr/bin/env node
import { nameOfTheGame, theQuestion, logicOfTheGame } from '../src/games/game-gcd.js';
import gameEngine from '../src/index.js';

gameEngine(nameOfTheGame, theQuestion, logicOfTheGame);
