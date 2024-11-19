import { WIN_PATTERNS } from '../constants';

export const checkWIn = (field, currentPlayer) =>
	WIN_PATTERNS.some((winPattern) =>
		winPattern.every((cellIndex) => field[cellIndex] === currentPlayer),
	);
