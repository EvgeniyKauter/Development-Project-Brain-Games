#!/usr/bin/env node
import gameEngine from '../src/index.js';
import { askQuestion, makelogic } from '../src/games/gameEven.js';

gameEngine(askQuestion, makelogic);
