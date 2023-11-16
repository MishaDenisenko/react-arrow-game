import { IEndGameCondition, IMapArrowCodes } from "./types"

export const INTERVAL_TIME: number = 2000
export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
}

export const ARR_ARROW_CODES: string[] = Object.keys(MAP_ARROW_CODES)

export const END_GAME_CONDITIONS: IEndGameCondition = {
  successCount: 3,
  failedCount: 3,
}
