import type { ArticleBodyContent } from "./types";
import { content as bestHairDryers } from "./articles/best-hair-dryers";
import { content as bestHotAirBrushes } from "./articles/best-hot-air-brushes";
import { content as bestHairStraighteners } from "./articles/best-hair-straighteners";
import { content as bestCurlingIrons } from "./articles/best-curling-irons";
import { content as bestHairClippers } from "./articles/best-hair-clippers";
import { content as bestDetanglingBrushes } from "./articles/best-detangling-brushes";

export const articleContentMap: Record<string, ArticleBodyContent> = {
  "best-hair-dryers": bestHairDryers,
  "best-hot-air-brushes": bestHotAirBrushes,
  "best-hair-straighteners": bestHairStraighteners,
  "best-curling-irons": bestCurlingIrons,
  "best-hair-clippers": bestHairClippers,
  "best-detangling-brushes": bestDetanglingBrushes,
};
