# Migrations

## `contentful` Folder

This folder contains all the contentful migration scripts

## migration script API

https://github.com/contentful/contentful-migration

## `migrate.js` Migration script

This script can sequentially go through the `contentful` directory and run the migration script on each one or just one specfic file depending on the arguments provided. Run the help command to see the options

```sh
yarn migrate --help
```

which will output this
```sh
Usage: yarn migrate [options]

Options:
  -h, --help     Show help                                             [boolean]
  -s, --space    CONTENTFUL_SPACE, this will use .env.developement variable if
                 not present
  -t, --token    CONTENTFUL_MANAGEMENT_ACCESS_TOKEN, this will use
                 .env.developement variable if not present
  -n, --name     name of the migration file, if this arg is not present it will
                 migrate all the files in the contenful folder
  -v, --version  Show version number                                   [boolean]

Examples:
  yarn migrate  -s <contentful-space> -t <management-token> -n <filename>

```

Prior to migrating all ensure that you have the `PRODUCT_WIDGET_ID` set in `.env.development`. You can see how this is done [here](https://github.com/ginlane/equalparts/tree/master/contentful-extensions)
