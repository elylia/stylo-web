const parser = require("biojs-io-newick");
const fs = require("fs");

const x =
  parser.parse_newick(`(((jp_daily_newsletter_mary_ann_parsons_1_1850:0.4819966076,jp_morning_chronicle_susan_moir_1850:0.4819966076):0.2026025779,((vl_morning_chronicle_william_burn_1846:0.5332144312,vl_sunday_times_punishment_of_children_1850:0.5332144312):0.08288215697,((jp_morning_chronicle_sarah_brown_1846:0.5000044849,(jp_morning_chronicle_dr_ellis_1846:0.4770486944,jp_morning_chronicle_wife_murder_1851:0.4770486944):0.02295579051):0.0442763788,(jp_morning_chronicle_mary_ann_parsons_2_1850:0.536926468,vl_morning_chronicle_north_family_1846:0.536926468):0.007354395749):0.07181572449):0.06850259729):0.09951694352,(((vl_daily_newsletter_corporal_punishment_1849:0.4008146735,vl_remarks_on_mr_fitzroys_bill_1853:0.4008146735):0.09944197192,(jp_morning_chronicle_anne_bird_1850:0.4481429623,vl_morning_chronicle_law_of_assault_1850:0.4481429623):0.05211368316):0.2554000843,(jp_sunday_times_questionable_charity_1850:0.7095150852,(vl_morning_chronicle_captain_johnstone_1846:0.3848591413,vl_morning_chronicle_matthewson_1846:0.3848591413):0.3246559438):0.04614164461):0.02845939926);
`);
const data = JSON.stringify(x);

fs.writeFile("bct_JSON.json", data, (err) => {
  if (err) {
    console.error(err);
  }
});
