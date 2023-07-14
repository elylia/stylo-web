import parser from "biojs-io-newick";
import fs from "fs";
const newickString = `((((vl_daily_newsletter_corporal_punishment_1849,vl_remarks_on_mr_fitzroys_bill_1853)0.8,(jp_morning_chronicle_anne_bird_1850,vl_morning_chronicle_law_of_assault_1850)0.8)0.8,(vl_morning_chronicle_captain_johnstone_1846,vl_morning_chronicle_matthewson_1846)1,jp_sunday_times_questionable_charity_1850)0.6,(jp_daily_newsletter_mary_ann_parsons_1_1850,jp_morning_chronicle_susan_moir_1850)0.6,(vl_morning_chronicle_william_burn_1846,vl_sunday_times_punishment_of_children_1850)0.6,(jp_morning_chronicle_sarah_brown_1846,vl_morning_chronicle_north_family_1846)0.8,jp_morning_chronicle_dr_ellis_1846,jp_morning_chronicle_mary_ann_parsons_2_1850,jp_morning_chronicle_wife_murder_1851)1`;
var pat = /(?<=\))[0-9\.]{1,3}/g;
var out = newickString.replace(pat, ":$&");
const x = parser.parse_newick(out);
const data = JSON.stringify(x);

fs.writeFile("bct_JSON.json", data, (err) => {
  if (err) {
    console.error(err);
  }
});
