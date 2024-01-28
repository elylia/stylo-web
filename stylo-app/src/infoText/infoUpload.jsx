import * as React from "react";
import InfoDialog from "../dialog/infoDialog";
import { Divider } from "@mui/material";

function InfoUpload() {
  const info = (
    <p>
      Please select the files for your corpus and upload them by clicking on
      <b>Upload Data</b>. Also in the dropdown select the file format and the
      language of the texts. If you are using an encoding other than UTF-8
      please activate the <b>Native Encoding</b> toggle switch.
      <br />
      Your texts are colored according to the characters before the first
      underscore (e.g. the texts author1_aStory & author1_aDrama are going to be
      red while the text author2_aBook & author2_aNovel are going to be blue).
      <br />
      <br />
      <Divider textAlign="left">
        <b>Format</b>
      </Divider>
      <li>
        <b>HTML:</b> HTML files (HTML headers, menus, links and other tags are
        removed).
      </li>
      <li>
        <b>Plain / Txt:</b> Plain Text files / Txt files (if your corpus does
        not contain diacritics, no encoding is needed. Otherwise, use ANSI for
        Windows, UTF-8 for Mac/Linux).
      </li>
      <li>
        <b>XML:</b> XML files (all tags and TEI headers are removed).
      </li>
      <li>
        <b>XML (Drama):</b> XML files (for plays; all tags, TEI headers, and
        speakers' names between &lt;speaker&gt;...&lt;/speaker&gt; tags are
        removed).
      </li>
      <li>
        <b>XML (no titles):</b> XML files (contents only; all tags, TEI headers,
        and chapter/section (sub)titles between &lt;head&gt;...&lt;/head&gt;
        tags are removed).
      </li>
      <br />
      <Divider textAlign="left">
        <b>Language</b>
      </Divider>
      <li>
        <b>CJK:</b> Chinese, Japanese and Korean (experimental stadium)
      </li>
      <li>
        <b>Dutch:</b> Plain Dutch: contractions and compound words are split
      </li>
      <li>
        <b>English:</b> Plain English (contractions and compound words are
        split).
      </li>
      <li>
        <b>English (all):</b> Modified English (contractions are not split).
      </li>
      <li>
        <b>English (contr.):</b> Further Modified English (contractions and
        compound words are not split).
      </li>
      <li>
        <b>French:</b> Plain French (contractions and compound words are split).
      </li>
      <li>
        <b>German:</b> Plain German (contractions and compound words are split).
      </li>
      <li>
        <b>Hungarian:</b> Plain Hungarian (contractions and compound words are
        split).
      </li>
      <li>
        <b>Italian:</b> Plain Italian (contractions and compound words are
        split).
      </li>
      <li>
        <b>Latin:</b> Plain Latin (U and V treated as distinct letters).
      </li>
      <li>
        <b>Latin (corr.):</b> Modified Latin (U and V both treated as U).
      </li>
      <li>
        <b>Polish:</b> Plain Polish (contractions and compound words are split).
      </li>
      <li>
        <b>Spanish:</b> Plain Castilian (contractions and compound words are
        split).
      </li>
      <li>
        <b>Other:</b> Other language than the ones listed above
      </li>
    </p>
  );
  return (
    <React.Fragment>{InfoDialog("Upload your Data", info)}</React.Fragment>
  );
}
export default InfoUpload;
