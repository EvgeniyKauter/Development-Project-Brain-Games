#!/usr/bin/env node
import {gameEngine} from '../src/index.js'
import {nameOfTheGame, theQuestion, logicOfTheGame} from '../src/games/game-even.js'

gameEngine(nameOfTheGame, theQuestion, logicOfTheGame);
