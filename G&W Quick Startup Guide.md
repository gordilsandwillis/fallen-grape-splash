# G&W Quick Startup Guide

## Out of the Box Block Types
- ATF
- Callout Text
- Fifty Fifty
- Multiple Images
- Two Column Text
- Wide Media

## Run Base Import

The out of the box block types correspond to contentful fields. For easy setup, we have an import file that you can import to your new blank Contentful space.

An import file is included in the root of repo
`/TBD BlocksToContentful.json`

#### Run Contentful Import
Run `contentful space import --content-file [Path to BlocksToContentful.json] --space-id [SPACE_ID]` in terminal

To speed things up further, this import will also create a `Page` content model, as well as a `SiteSettings` model to be used across the site. It will also include a PLACEHOLDER version of each content model to avoid graphql problems.

#### Documentation For Importing From File
https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/