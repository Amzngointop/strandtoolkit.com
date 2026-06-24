import type { GuideBodyContent } from "./types";
import { content as howToChooseADryer } from "./guides/how-to-choose-a-hair-dryer";
import { content as curlingIronNoDamage } from "./guides/curling-iron-without-heat-damage";
import { content as detangleEveryType } from "./guides/how-to-detangle-every-hair-type";
import { content as salonBlowout } from "./guides/salon-blowout-at-home";
import { content as straightenerVsBrush } from "./guides/straightener-vs-hot-air-brush";
import { content as buildToolKit } from "./guides/build-your-hair-tool-kit";

export const guideContentMap: Record<string, GuideBodyContent> = {
  "how-to-choose-a-hair-dryer": howToChooseADryer,
  "curling-iron-without-heat-damage": curlingIronNoDamage,
  "how-to-detangle-every-hair-type": detangleEveryType,
  "salon-blowout-at-home": salonBlowout,
  "straightener-vs-hot-air-brush": straightenerVsBrush,
  "build-your-hair-tool-kit": buildToolKit,
};
